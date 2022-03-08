import React from 'react';

import './Layout.css';

function Layout({ children }) {
  return (
    <div className="app-container">
      <div className="main-content">
        {children}
      </div>
    </div>
  );
}

export default Layout;
