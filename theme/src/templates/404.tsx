import React from 'react';
import Layout from '../components/Layout';
import ErrorMessage from '../components/ErrorMessage';
import { Link } from 'gatsby';

const missingImage = { src: 'img/missing.svg', alt: 'Missing' };

const NotFound = () => (
  <Layout>
    <ErrorMessage image={missingImage}>
      I think you are lost 🤔
      <br />
      <Link to="/">Go back to 🏚</Link>
    </ErrorMessage>
  </Layout>
);

export default NotFound;
