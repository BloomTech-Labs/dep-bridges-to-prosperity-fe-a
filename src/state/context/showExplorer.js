import React, { useState } from 'react';

const ShowExplorerContext = React.createContext([{}, () => {}]);

const ShowExplorerProvider = props => {
  const [state, setState] = useState({
    show: 'landing-page-wrapper-visible',
    buttonName: 'Show Map',
  });
  return (
    <ShowExplorerContext.Provider value={[state, setState]}>
      {props.children}
    </ShowExplorerContext.Provider>
  );
};

export { ShowExplorerContext, ShowExplorerProvider };
