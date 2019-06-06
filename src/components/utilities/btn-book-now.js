import React from 'react';
import PropTypes from 'prop-types';
import noop from './noop';
import styled from 'styled-components';

import './btn-book-now.css';

const BookNow = ({ buttonText, buttonStyle, buttonLink }) => {
  const div = styled.div`
    color: red;
  `;

  return (
    <div
      className="cta_book_now curvy_2"
      style={{ buttonStyle }}
      onClick={buttonLink}
    >
      {buttonText}
    </div>
  );
};

BookNow.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonStyle: PropTypes.object,
  buttonLink: PropTypes.func
};

BookNow.defaultProps = {
  buttonLink: noop,
  buttonStyle: {}
};

export default BookNow;
