import {Typography, Box, CircularProgress } from '@material-ui/core/';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import { graphql } from "gatsby";
import React, {useState} from "react";
import {Layout} from "../components/layout";

const useStyles = makeStyles({
  root: {
    margin: '20px 0'
  },
  title: {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  img: {
    maxWidth: '1200px',
    width: 'max-content',
  },
  disable: {
    display: 'none',
  },
  progres: {
    margin: '30px auto'
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  
});

export default function Post({data}) {
  const content = data.markdownRemark;
  const styles = useStyles();

  const [isImageLoad, setIsLoadImage] = useState(false);
  console.log("Post -> content", content)

  return (
    <Layout>
      <Box className={styles.root}>

        <Typography variant='h3' className={styles.title}>
          {content.frontmatter.title}
        </Typography>
        <Box className={styles.content}>
          <CircularProgress
            color="secondary"
            className={clsx(
              {
                [styles.progres]: !isImageLoad,
                [styles.disable]: isImageLoad,
              }
            )}
          />
          <img
            src={content.frontmatter.img}
            alt={content.frontmatter.title}
            className={clsx(
              {
                [styles.img]: isImageLoad,
                [styles.disable]: !isImageLoad,
              }
            )}
            onLoad={() => {setIsLoadImage(true)}}
            />
        </Box>

        <div className={styles.text} variant="subtitle2" dangerouslySetInnerHTML={
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
