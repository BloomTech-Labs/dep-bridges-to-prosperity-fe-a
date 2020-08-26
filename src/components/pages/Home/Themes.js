import React from 'react';

export default function Themes({ changeTheme }) {
  return (
    <div>
      <button
        id="ckdp065po06j11ip6ga2xsphr"
        className="filter-btn"
        onClick={changeTheme}
      >
        Minimo Map
      </button>
      <button
        id="ckeaavyf603w319p8sqrfxm7n"
        className="filter-btn"
        onClick={changeTheme}
      >
        Terrain Map
      </button>
      <button
        id="cke9et76u0o361aqngn9owqnu"
        className="filter-btn"
        onClick={changeTheme}
      >
        Elevation Map
      </button>
    </div>
  );
}
