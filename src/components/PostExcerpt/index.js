import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { truncate } from 'lodash'
import { createLocalLink, stripTags } from '../utils'
import PostMeta from '../PostMeta'

const PostExcerpt = ({ post }) => (
  <div className="no-underline pb-4 mb-4 border-b block">
    <Link to={createLocalLink(post.link)} className="no-underline">
      {post.featuredImage && (
        <img
          src={post.featuredImage.sourceUrl}
          className="w-full h-auto mr-4 mb-2"
          style={{ objectFit: 'cover' }}
          alt={post.featuredImage.caption}
        />
      )}
      <h4 className="pr-4 text-xl text-grey-darkest mb-2 " dangerouslySetInnerHTML={{ __html: post.title }} />
    </Link>
    <div
      className="text-grey-darkest font-light mb-4 entry"
      dangerouslySetInnerHTML={{
        __html: post.excerpt ? post.excerpt : stripTags(truncate(post.content, { length: 200, seperator: ' ' })),
      }}
    />
    <PostMeta post={post} />
  </div>
)

PostExcerpt.propTypes = {}

export default PostExcerpt
