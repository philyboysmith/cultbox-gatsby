import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
import { createLocalLink } from '../utils'

const QUERY = graphql`
  {
    wpgraphql {
      posts(first: 10) {
        nodes {
          uri
          title
          link
          featuredImage {
            sourceUrl
            id
            caption
          }
        }
      }
    }
  }
`

const RecentPosts = () => (
  <StaticQuery
    query={QUERY}
    render={data => (
      <div>
        {data.wpgraphql.posts.nodes.map(post => (
          <Link
            key={post.uri}
            to={createLocalLink(post.link)}
            className="flex bg-cyan text-white border-b border-white p-2 no-underline"
          >
            {false && (
              <img
                src={post.featuredImage.sourceUrl}
                className="w-24 h-24 mr-4"
                style={{ objectFit: 'cover' }}
                alt={post.featuredImage.caption}
              />
            )}
            <h4 className="pr-4 text-sm" dangerouslySetInnerHTML={{ __html: post.title }} />
          </Link>
        ))}
      </div>
    )}
  />
)

export default RecentPosts
