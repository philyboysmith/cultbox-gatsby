import React from 'react'

import { StaticQuery, graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import PostExcerpt from '../components/PostExcerpt'

import RecentPosts from '../components/RecentPosts'

const QUERY = graphql`
  {
    wpgraphql {
      posts(first: 10) {
        nodes {
          uri
          title
          excerpt
          content
          link
          date
          featuredImage {
            sourceUrl
            id
            caption
          }
          tags {
            nodes {
              slug
              name
            }
          }
        }
      }
    }
  }
`

const Post = ({ location }) => (
  <StaticQuery
    query={QUERY}
    render={data => (
      <Layout location={location}>
        <div className="md:flex">
          <aside className="md:w-48 md:pt-4 border-t-2 border-cyan">Features</aside>
          <main className="flex-1 border-t-2 border-cyan md:mx-8 md:pt-2">
            {data.wpgraphql.posts.nodes &&
              data.wpgraphql.posts.nodes.map(post => (
                <div key={post.id}>
                  <PostExcerpt post={post} />
                </div>
              ))}
          </main>
          <aside className="md:w-64">
            <RecentPosts />
          </aside>
        </div>
      </Layout>
    )}
  />
)

export default Post
