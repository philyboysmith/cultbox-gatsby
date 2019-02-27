import React from 'react'
import PropTypes from 'prop-types'

const PostEntry = ({ post }) => (
  <div className="">
    {false && (
      <img
        src={post.featuredImage.sourceUrl}
        className="w-full h-64 mr-4 mb-2"
        style={{ objectFit: 'cover' }}
        alt={post.featuredImage.caption}
      />
    )}
    <h1 className="mb-2" dangerouslySetInnerHTML={{ __html: post.title }} />
    <div className="leading-normal entry" dangerouslySetInnerHTML={{ __html: post.content }} />
  </div>
)

PostEntry.propTypes = {}

export default PostEntry
