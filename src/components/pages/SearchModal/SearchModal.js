import React from 'react';
import './styles.less';
import { useSelector } from 'react-redux';
import ReactDOM from 'react-dom';
import { ShowExplorerContext } from '../../../state/context/showExplorer';

const SearchModal = React.forwardRef((props, ref) => {
  const [searchString, setSearchString] = React.useState('');
  const [display, setDisplay] = React.useState(false);
  React.useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      close: () => close(),
    };
  });
  const { bridgeData } = useSelector(state => state.bridgeSitesReducer);
  const handleChange = e => {
    e.preventDefault();
    setSearchString(e.target.value);
  };
  const open = () => {
    setSearchString('');
    props.toggleBridges();
    props.onClear();
    setDisplay(true);
  };
  const close = () => {
    setDisplay(false);
  };
  const [bridgeDataFiltered, setBridgeDataFiltered] = React.useState(
    bridgeData
  );

  React.useEffect(() => {
    setBridgeDataFiltered(filterByValue(bridgeData));
  }, [searchString, bridgeData]);

  function filterByValue(array) {
    // From S/O searches all keys and values at once
    return array.filter(
      data =>
        JSON.stringify(data.name)
          .toLowerCase()
          .indexOf(searchString.toLowerCase()) !== -1
    );
  }
  const [contextState, setContextState] = React.useContext(ShowExplorerContext);
  function handleClick(info) {
    setContextState(contextState => ({
      ...contextState,
      show: 'landing-page-wrapper-hidden',
    }));
    window.scrollTo(0, 0);
    close();
    props.ZoomIn(info);
  }
  if (display) {
    return ReactDOM.createPortal(
      <div className={'modal-wrapper'}>
        <div onClick={close} className={'modal-backdrop'}></div>
        <div className={'modal-box'}>
          <div className="modal-bridge-area">
            <div className="image-box">
              <img src={require('./assets/Search.png')} alt="logo" />

              <img
                src={require('./assets/x.png')}
                alt="close"
                className="pointer close-x"
                onClick={close}
              ></img>
            </div>
            <br />
            <br />
            <input
              type="search"
              placeholder="What bridge are you looking for?"
              onChange={handleChange}
            />
            <hr />
            <br />
            {bridgeDataFiltered.map((bridge, index) => {
              return (
                <div key={index}>
                  <div
                    className="modal-bridge-unit pointer"
                    onClick={() => {
                      handleClick(bridge);
                    }}
                  >
                    <div className="modal-district-country">
                      {bridge.district} District, {bridge.country}
                    </div>
                    <div className="modal-name">{bridge.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>,
      document.getElementById('modal-root')
    );
  }

  return null;
});
export default SearchModal;
