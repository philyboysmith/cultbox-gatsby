import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { IoLogoTwitter, IoLogoFacebook, IoMdSearch } from 'react-icons/io'
import { createLocalLink } from '../utils'

import Logo from '../../images/cultbox-logo.svg'

const SiteHeader = ({ location, activeCategory }) => (
  <StaticQuery
    query={graphql`
      query GET_CATEGORIES {
        wpgraphql {
          categories {
            nodes {
              link
              slug
              id
              name
              children {
                nodes {
                  link
                  slug
                  id
                  name
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <div className="py-2 md:pt-16">
          <Link to="/">
            <img src={Logo} alt="cultbox" className="w-64 max-w-sm " />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row text-cyan items-center mb-2">
          {data && (
            <nav className="flex-1">
              <ul className="list-reset flex">
                {data.wpgraphql.categories.nodes.map(cat => {
                  const currentUrlArray = location.pathname.split('/')
                  return (
                    <li key={cat.link}>
                      <Link
                        to={createLocalLink(cat.link.replace('category/', ''))}
                        className={
                          currentUrlArray[1] === cat.slug
                            ? 'text-cyan no-underline uppercase p-4 md:pl-0 font-bold text-sm '
                            : 'text-grey-darkest no-underline uppercase p-4 md:pl-0 font-bold text-sm '
                        }
                      >
                        {cat.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
          )}
          <div className="">
            <ul className="list-reset flex text-3xl">
              <li>
                <a href="#" className="text-cyan p-2">
                  <IoLogoTwitter />
                </a>
              </li>
              <li>
                <a href="#" className="text-cyan p-2">
                  <IoLogoFacebook />
                </a>
              </li>
              <li>
                <a href="#" className="text-cyan p-2">
                  <IoMdSearch />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )}
  />
)

export default SiteHeader
