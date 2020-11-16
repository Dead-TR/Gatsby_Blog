import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {GridList, GridListTile, GridListTileBar} from '@material-ui/core';
import {Link} from 'gatsby';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '10px 0 0',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    maxWidth: '1200px',
    height: '100%',
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));

export const GridListBox = ({data}) => {
  const tileData = data.allMarkdownRemark.edges;
  const styles = useStyles();
  const width = document.body.offsetWidth;

  return (
    <div className={styles.root}>
      <GridList cellHeight={300} spacing={2} className={styles.gridList}>
        {tileData.map(({node}) => (
            <GridListTile
              key={node.frontmatter.img}
              cols={width > 576? 1 : 2}
              rows={1}
            >
              <Link to={`/${node.fields.way}`} className={styles.link}>
                <img src={node.frontmatter.img} alt={node.frontmatter.title} />
                <GridListTileBar
                  title={node.frontmatter.title}
                  titlePosition="top"
                  actionPosition="right"
                  className={styles.titleBar}
                />
              </Link>
            </GridListTile>
          )
        )}
      </GridList>
    </div>
  );
}


