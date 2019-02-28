import React from 'react'

import Layout from '../components/Layout'
import PostEntry from '../components/PostEntry'

import RecentPosts from '../components/RecentPosts'
import SubNav from '../components/SubNav'

const Post = ({ location, pageContext }) => {
  const { post, recent } = pageContext
  return (
    <Layout location={location}>
      <div className="md:flex">
        <aside className="md:w-48 md:pt-4 border-t-2 border-cyan">
          <SubNav location={location} />
        </aside>
        <main className="flex-1 border-t-2 border-cyan md:mx-8 md:pt-2">
          <PostEntry post={post} />
        </main>
        <aside className="md:w-64">{typeof window !== 'undefined' && <RecentPosts />}</aside>
      </div>
    </Layout>
  )
}

export default Post
