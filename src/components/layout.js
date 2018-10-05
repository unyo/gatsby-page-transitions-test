import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import PageTransition from './PageTransition'
import Header from './header'
import './layout.css'

const Layout = ({ element, props }) => (
  <React.Fragment>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <Header siteTitle={data.site.siteMetadata.title} />
        </>
      )}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 'calc(960px - 2.175rem)',
        padding: '0px 0 1.45rem',
        paddingTop: 0,
        position: 'relative',
      }}
    >
      <PageTransition {...props}>{element}</PageTransition>
    </div>
  </React.Fragment>
)

Layout.propTypes = {
  element: PropTypes.node.isRequired,
}

export default Layout
