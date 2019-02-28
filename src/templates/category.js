import React from 'react'

import Link from 'gatsby-link'
import Layout from '../components/Layout'
import PostExcerpt from '../components/PostExcerpt'
import RecentPosts from '../components/RecentPosts'
import SubNav from '../components/SubNav'

const NavLink = ({ prefix, test, url, text }) => {
  if (!test) {
    return <Link to={`${prefix}/${url}`}>{text}</Link>
  }
  return <span>{text}</span>
}
const Category = ({ location, pageContext }) => {
  const { group, index, first, last, pageCount } = pageContext
  const previousUrl = index - 1 == 1 ? '' : (index - 1).toString()
  const nextUrl = (index + 1).toString()

  return (
    <Layout location={location}>
      <div className="md:flex">
        <aside className="md:w-48 md:pt-4 border-t-2 border-cyan">
          <SubNav location={location} />
        </aside>
        <main className="flex-1 border-t-2 border-cyan md:mx-8 md:pt-2">
          {pageContext.group &&
            pageContext.group.map(post => (
              <div key={post.id}>
                <PostExcerpt post={post} />
              </div>
            ))}
          <div className="previousLink">
            <NavLink prefix={pageContext.pathPrefix} test={first} url={previousUrl} text="Go to Previous Page" />
          </div>
          <div className="nextLink">
            <NavLink prefix={pageContext.pathPrefix} test={last} url={nextUrl} text="Go to Next Page" />
          </div>
        </main>
        <aside className="md:w-64">
          <RecentPosts />
        </aside>
      </div>
    </Layout>
  )
}

export default Category
