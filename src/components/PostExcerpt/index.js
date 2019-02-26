import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { createLocalLink } from '../utils'

const PostExcerpt = ({ post }) => (
  <h4>
    <Link to={createLocalLink(post.link)} className="no-underline pb-4 mb-4 border-b block">
      {post.featuredImage && (
        <img
          src={post.featuredImage.sourceUrl}
          className="w-full h-64 mr-4 mb-2"
          style={{ objectFit: 'cover' }}
          alt={post.featuredImage.caption}
        />
      )}
      <h4 className="pr-4 text-xl text-grey-darkest mb-2 " dangerouslySetInnerHTML={{ __html: post.title }} />
      <div className="text-grey-darkest font-light mb-2" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
    </Link>
  </h4>
)

PostExcerpt.propTypes = {}

export default PostExcerpt

export const query = graphql`
  fragment PostExcerptFragment on WPGraphQL_Post {
    id
    title
    uri
    slug
    date
  }
`
