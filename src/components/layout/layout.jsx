import React from "react";
import { css } from "@emotion/react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { rhythm } from "../../utils/typography";
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <div>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3
            css={css`
              margin-bottom: ${rhythm(1)};
              display: inline-block;
              font-style: normal;
            `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      <main
        css={css`
          background-color: #fff;
          position: relative;
          z-index: 2;
          width: 100%;
          margin: 0 auto;
          margin-bottom: 200px;
        `}
      >
        {children}
      </main>
      <footer
        css={css`
          position: fixed;
          z-index: 1;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: #e9ecef;
          height: 200px;
        `}
      >
        <p>© 2020 Authorized By Jack Zhu</p>
      </footer>
    </div>
  );
};
