import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
import { createLocalLink } from '../utils'

const QUERY = graphql`
  {
    wpgraphql {
      categories {
        nodes {
          id
          name
          slug
          link
          count
          children {
            nodes {
              id
              name
              slug
              link
              count
            }
          }
        }
      }
    }
  }
`

const SubNav = ({ location }) => (
  <StaticQuery
    query={QUERY}
    render={data => {
      const categories = data.wpgraphql.categories.nodes
      const currentUrlArray = location.pathname.split('/')
      let currentTree = null
      categories.forEach(category => {
        if (category.slug.includes(currentUrlArray[1])) {
          currentTree = category
        }
        category.children.nodes.forEach(subCategory => {
          if (subCategory.slug.includes(currentUrlArray[1])) {
            currentTree = category
          }
        })
      })

      return (
        <div>
          {currentTree && <h2>{currentTree.name}</h2>}
          {currentTree.children.nodes.map(child => (
            <Link
              key={child.id}
              to={createLocalLink(child.link.replace('category/', ''))}
              className={
                currentUrlArray[2] === child.slug
                  ? ' text-cyan  no-underline uppercase py-2 md:pl-0 font-bold text-sm hover:text-cyan block border-b border-cyan'
                  : 'text-grey-darkest no-underline uppercase py-2 md:pl-0 font-bold text-sm hover:text-cyan block border-b border-cyan'
              }
            >
              {child.name}
            </Link>
          ))}
        </div>
      )
    }}
  />
)

export default SubNav
