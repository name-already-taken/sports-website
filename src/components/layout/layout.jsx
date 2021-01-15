import React from "react";
import { css } from "@emotion/react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Typing from "../typing/typing";
import { rhythm } from "../../utils/typography";

import styles from "./layout.module.css";

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
      <header className={styles.header}>
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
      <main className={styles.main}>
        {children}
        <Typing
          text={["Here is the typing animation! ", "You must try harder. "]}
        />
      </main>
      <footer className={styles.footer}>
        <p>© 2021 Authorized By Jack Zhu</p>
      </footer>
    </div>
  );
};
