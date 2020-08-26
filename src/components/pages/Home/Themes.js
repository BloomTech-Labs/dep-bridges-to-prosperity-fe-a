import React from 'react';

export default function Themes({ changeTheme }) {
  return (
    <div className="filter">
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
        id="ckebpt7fe1hfn19p7roqubcev"
        className="filter-btn"
        onClick={changeTheme}
      >
        Satellite Map
      </button>
    </div>
  );
}
