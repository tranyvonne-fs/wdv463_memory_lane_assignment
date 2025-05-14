import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

export const query = graphql`
  {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          slug
          date(formatString: "MMMM D, YYYY")
        }
        excerpt
      }
    }
  }
`;

export default function Home({ data }) {
  return (
    <Layout>
      <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
      <ul>
        {data.allMdx.nodes.map(post => (
          <li key={post.frontmatter.slug} className="mb-6">
            <Link to={`/${post.frontmatter.slug}`} className="text-lg text-blue-600 hover:underline">
              {post.frontmatter.title}
            </Link>
            <p className="text-sm text-gray-500">{post.frontmatter.date}</p>
            <p className="text-base">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
