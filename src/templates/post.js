import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';

export const query = graphql`
  query ($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export default function Post({ data }) {
  const { frontmatter, body } = data.mdx;
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-2">{frontmatter.title}</h2>
      <p className="text-sm text-gray-600 mb-4">{frontmatter.date}</p>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
}
