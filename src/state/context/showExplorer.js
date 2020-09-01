import React, { useState } from 'react';

const ShowExplorerContext = React.createContext([{}, () => {}]);

const ShowExplorerProvider = props => {
  const [contextState, setContextState] = useState({
    show: 'landing-page-wrapper-visible',
    buttonName: 'Show Map',
  });
  return (
    <ShowExplorerContext.Provider value={[contextState, setContextState]}>
      {props.children}
    </ShowExplorerContext.Provider>
  );
};

export { ShowExplorerContext, ShowExplorerProvider };
