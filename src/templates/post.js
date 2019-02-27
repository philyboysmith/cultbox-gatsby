import React from 'react'

import Layout from '../components/Layout'
import PostEntry from '../components/PostEntry'

import RecentPosts from '../components/RecentPosts'

const Post = props => {
  const { location, pageContext } = props
  const { post, recent } = pageContext
  return (
    <Layout activeCategory={post.categories.nodes.length ? post.categories.nodes[0].slug : null}>
      <div className="md:flex">
        <aside className="md:w-48 md:pt-4 border-t-2 border-cyan">Features</aside>
        <main className="flex-1 border-t-2 border-cyan md:mx-8 md:pt-2">
          <PostEntry post={post} />
        </main>
        <aside className="md:w-64">{typeof window !== 'undefined' && <RecentPosts />}</aside>
      </div>
    </Layout>
  )
}

export default Post
