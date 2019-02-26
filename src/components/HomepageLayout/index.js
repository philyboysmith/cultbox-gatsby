import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const QUERY = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const HomepageLayout = ({}) => (
  <StaticQuery
    query={QUERY}
    render={data => (
      <>
        <h4>HomepageLayout</h4>
      </>
    )}
  />
);

HomepageLayout.propTypes = {};

export default HomepageLayout;
