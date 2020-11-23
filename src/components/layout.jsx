import React, {useState} from 'react';
import {Header} from './header/header';

export const Context = React.createContext();

export function Layout({children}) {
  const [user, setUser] = useState(null);

  return (
    <Context.Provider value={[user, setUser]}>
      <div>
        <header>
          <Header />
        </header>
        <main>
          {children}
        </main>
      </div>
    </Context.Provider>
  );
}
