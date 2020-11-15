import {Typography, Box, CircularProgress } from '@material-ui/core/';

import { makeStyles } from '@material-ui/core/styles';

import { graphql } from "gatsby";
import React, {useState} from "react";
import {Layout} from "../components/layout";

const useStyles = makeStyles({
  title: {
    width: '100%',
    maxWidth: 500,
    textAlign: 'center',
  },
  img: {
    maxWidth: 750,
    maxHeight: 750,
    width: '100%',
  },
  content: {
    width: '100%',
    maxWidth: 750,
    display: 'flex',
    justifyContent: 'center',
  },
  root: {
    margin: '20px 0'
  }
});

export default function Post({data}) {
  const content = data.markdownRemark;
  const styles = useStyles();

  const [isLoadImage, setIsLoadImage] = useState(false);
  console.log("Post -> content", content)

  return (
    <Layout>
      <Box className={styles.root}>

        <Typography variant='h3' className={styles.title}>
          {content.frontmatter.title}
        </Typography>
        <Box className={styles.content}>
          {/* встановити лоадер для зображення: */}
          {/* <CircularProgress color="secondary" /> */}
          <img
            src={content.frontmatter.img}
            alt={content.frontmatter.title}
            className={styles.img}
            />
        </Box>

        <div variant="subtitle2" dangerouslySetInnerHTML={
          { __html: content.html }
        } />

      </Box>
    </Layout>
  )
}

export const q = graphql`
  query ($way: String) {
    markdownRemark(
      fields: {way: {eq: $way}},
      frontmatter: {type: {eq: "post"}}
    ) {
      id
      html
      frontmatter {
        author
        img
        title
        type
      }
    }
  }
`;
