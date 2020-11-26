import { Container, makeStyles } from '@material-ui/core';
import React from 'react';
import {Header} from './header/header';

const styleUse = makeStyles({
  main: {
    marginTop: '24px',
    maxWidth: '1200px',
  },
})

export function Layout({children}) {
  const styles = styleUse();

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Container className={styles.main}>
          {children}
        </Container>
      </main>
    </div>
  );
}
