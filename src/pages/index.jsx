import React from "react"
import {Layout} from "../components/layout";
import {GridListBox} from '../components/gridListBox';
import '../styles/general.css';

export default function Home({data}) {

  return (
    <Layout>
      <GridListBox data={data} />
    </Layout>
  )
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            img
            title
            type
          }
          fields {
            way
          }
        }
      }
    }
  }
`
