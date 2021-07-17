import React from 'react';
import PropTypes from 'prop-types';

import Container from '../Container';

const Layout = ({ children }) => (
  <>
    <Container>{children}</Container>
  </>
);

Layout.protoType = {
  children: PropTypes.node.isRequired,
};

export default Layout;