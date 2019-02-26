import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
import { createLocalLink } from '../utils'

import Logo from '../../images/cultbox-logo--white.svg'

const QUERY = graphql`
  query FooterQuery {
    wpgraphql {
      menus(where: { slug: "footer-menu" }) {
        edges {
          node {
            id
            menuItems {
              edges {
                node {
                  id
                  label
                  url
                  connectedObject {
                    __typename
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const SiteFooter = ({}) => (
  <StaticQuery
    query={QUERY}
    render={data => (
      <>
        <div className="bg-cyan text-white py-4 font-light">
          <div className="container">
            <div className="flex flex-col md:flex-row">
              <img src={Logo} className="w-48 mb-2 md:mb-0" />
              <div className="flex-1">
                <div className="flex-col md:text-right">
                  {data.wpgraphql.menus.edges[0].node.menuItems.edges && (
                    <ul className="list-reset flex flex-wrap md:justify-end">
                      {data.wpgraphql.menus.edges[0].node.menuItems.edges.map(menuItem => (
                        <li key={menuItem.node.url}>
                          <Link
                            className="text-white p-2"
                            to={createLocalLink(menuItem.node.url)}
                            dangerouslySetInnerHTML={{ __html: menuItem.node.label }}
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                  <p className="p-2">All rights reserved | Site built by amillionmonkeys</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )}
  />
)
SiteFooter.propTypes = {}

export default SiteFooter
