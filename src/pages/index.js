import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import usePost from '../hooks/use-posts';

export default () => {
  const posts = usePost();
  return (
    <Layout>
      <h1>Hello</h1>
      <div>Hello Frontend Masters!</div>
      <Link to='/about/'>Learn about me &rarr; </Link>

      <h2>Read my Blog</h2>
      {posts.map(post => (
        <pre>{JSON.stringify(post, null, 2)}</pre>
      ))}
    </Layout>
  )
}
