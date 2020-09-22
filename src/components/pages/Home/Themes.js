import React from 'react';

export default function Themes({ changeTheme }) {
  return (
    <div className="theme-wrap">
      <h3>Map Theme Options</h3>
      <button
        className="theme-btn"
        id="ckf5rc0ty07fy1aphplybpubm"
        onClick={changeTheme}
      >
        Standard Map
      </button>
      <button
        id="ckf5rh55n004o19ojswfmx3i9"
        className="theme-btn"
        onClick={changeTheme}
      >
        Terrain Map
      </button>
      <button
        id="ckf5rf05204ln19o7o0sdv860"
        className="theme-btn"
        onClick={changeTheme}
      >
        Satellite Map
      </button>
    </div>
  );
}
