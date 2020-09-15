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
      // testMethod: () => console.log('testing modal ref'),
    };
  });
  const { bridgeData } = useSelector(state => state.bridgeSitesReducer);
  const handleChange = e => {
    e.preventDefault();
    setSearchString(e.target.value);
    // console.log('SearchString', searchString); // Works
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

  // SO boilerplate reducer
  // var reduced = options.reduce(function(filtered, option) {
  //   if (option.assigned) {
  //      var someNewValue = { name: option.name, newProperty: 'Foo' }
  //      filtered.push(someNewValue);
  //   }
  //   return filtered;
  // }, []);

  function filterByValue(array) {
    // From Stack Overflow searches all keys and values at once
    return array.filter(
      data =>
        JSON.stringify(data.name)
          .toLowerCase()
          .indexOf(searchString.toLowerCase()) !== -1
    );
  }
  const [contextState, setContextState] = React.useContext(ShowExplorerContext);
  function handleClick(info) {
    // alert(info.name + ' ' + info.district);
    //TODO
    // Toggle Landing Page visibility class to hidden
    setContextState(contextState => ({
      ...contextState,
      show: 'landing-page-wrapper-hidden',
    }));
    window.scrollTo(0, 0);
    // Close Search Modal
    close();
    props.ZoomIn(info);

    // Zoom in to marker and pull up data
  }
  // React.useEffect(() => {}, [searchString]);
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
              // Todo why didn't props.bridgeData work? It threw error but doesn't through when using redux
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
