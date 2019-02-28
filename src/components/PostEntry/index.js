import React from 'react'
import PropTypes from 'prop-types'
import PostMeta from '../PostMeta'

const PostEntry = ({ post }) => (
  <div className="mb-4">
    {post.featuredImage && (
      <img
        src={post.featuredImage.sourceUrl}
        className="w-full h-auto mr-4 mb-2"
        style={{ objectFit: 'cover' }}
        alt={post.featuredImage.caption}
      />
    )}
    <h1 className="text-5xl mb-4" dangerouslySetInnerHTML={{ __html: post.title }} />
    <div className="leading-normal entry" dangerouslySetInnerHTML={{ __html: post.content }} />
    <PostMeta post={post} />
  </div>
)

PostEntry.propTypes = {}

export default PostEntry
