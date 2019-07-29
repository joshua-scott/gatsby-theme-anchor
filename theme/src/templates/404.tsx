import React from 'react';
import Layout from '../components/Layout';
import ErrorMessage from '../components/ErrorMessage';

const NotFound = () => (
  <Layout>
    <ErrorMessage reason="I think you are lost 🤔" image="missing" />
  </Layout>
);

export default NotFound;
