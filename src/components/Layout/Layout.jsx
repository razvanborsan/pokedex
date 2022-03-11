import React from 'react';
import { Link } from 'react-router-dom';

import './Layout.css';

function Layout({ children }) {
  return (
    <div className="app-container">
      <div className="main-content">
        <Link to="/pokemon">
          <h1 className="pokedex-title">Pokedex</h1>
        </Link>

        {children}
      </div>
    </div>
  );
}

export default Layout;
