import React from 'react';
import snorlax from 'images/snorlax_404.png';
import pokeflute from 'images/pokeflute_404.png';

import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="content-404">
      <p>Hi! I&apos;m Snorlax. I&apos;m blocking the path.</p>
      <img src={snorlax} alt="Snorlax" />
      <p>
        Click
        <Link to="/" className="link-404">
          here
        </Link>
        {' '}
        to go back!
        <img id="pokeflute" src={pokeflute} alt="Pokeflute" />
      </p>
    </div>
  );
}

export default NotFound;
