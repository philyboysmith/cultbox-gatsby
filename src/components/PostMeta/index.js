import React from 'react'

import moment from 'moment'

const PostMeta = ({ post }) => (
  <div>
    <p className="uppercase text-xs text-black leading-normal">
      Posted {moment(post.date).format(`MMMM Do YYYY`)} & Filed under{' '}
      {post.tags.nodes.map((item, index) => (
        <span key={item.id}>{(index ? ', ' : '') + item.name}</span>
      ))}
    </p>
  </div>
)

export default PostMeta
