import React from "react";
import { graphql } from "gatsby";
import { css, keyframes } from "@emotion/react";
import Layout from "../components/layout/layout";

const fade_in = keyframes`
  from{
    opacity:0%;
    transform: translate3d(0, 10px, 0);
  }
`;

export default ({ data }) => (
  <Layout>
    <div
      css={css`
        animation: ${fade_in} 2s alternate infinite;
      `}
    >
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </div>
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
