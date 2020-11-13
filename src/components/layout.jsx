import React from 'react';
import {Header} from './header/header';

export function Layout({children}) {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}