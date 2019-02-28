import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import SiteHeader from '../SiteHeader'
import SiteFooter from '../SiteFooter'

const Layout = ({ location, activeCategory, children }) => (
  <div className="font-sans min-h-screen text-grey-darkest">
    <div className="container mb-8">
      <SiteHeader location={location} activeCategory={activeCategory} />
      <main>{children}</main>
    </div>
    <SiteFooter />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  activeCategory: PropTypes.string,
}

export default Layout
