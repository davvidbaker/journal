/**
 * TODO hit the space bar or something to remove all redactions.
 */

import shortid from 'shortid';
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Element from './Element';

const Span = styled.span`
  ${props => (props.redactionsVisible ? '' : 'background: black')};

  *::selection {
    ${props =>
      props.redactionsVisible ? 'background: red' : 'background: black;'};
  }
`;

const Redaction = ({ children, redactionsVisible }) => {
  console.log('updating redaction');
  return (
    <Span redactionsVisible={redactionsVisible}>
      {children.map(child => (
        <Element key={shortid.generate()} type={child.type} {...child}>
          {child.children}
        </Element>
      ))}
    </Span>
  );
};

export default connect(
  state => ({
    redactionsVisible: state.whoa.redactionsVisible,
  }),
  null
)(Redaction);
