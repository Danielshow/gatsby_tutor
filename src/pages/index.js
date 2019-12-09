import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>Hello</h1>
    <div>Hello Frontend Masters!</div>
    <Link to='/about/'>Learn about me &rarr; </Link>
  </Layout>
)
