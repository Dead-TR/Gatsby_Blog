import React from "react"
import {Layout} from "../components/layout";
import '../styles/general.css';

export default function Home() {

  return (
    <Layout>
      
    </Layout>
  )
};

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            author
            img
            title
            type
          }
        }
      }
    }
  }
`
