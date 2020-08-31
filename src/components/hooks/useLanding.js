import React from 'react';

export const useLanding = () => {
  const [hideLanding, setHideLanding] = React.useState(false);
  const setLandingTrue = () => {
    setHideLanding(true);
  };
  const setLandingFalse = () => {
    setHideLanding(false);
  };
  return {
    // hideLanding,
    setLandingTrue,
    setLandingFalse,
  };
};
