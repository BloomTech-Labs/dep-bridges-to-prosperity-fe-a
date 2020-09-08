import React from 'react';
import './styles.less';
import { useSelector } from 'react-redux';
import ReactDOM from 'react-dom';

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

  const open = () => {
    setDisplay(true);
  };
  const close = () => {
    setDisplay(false);
  };

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
            />
            <hr />
            <br />
            {bridgeData.map((bridge, index) => {
              // Todo why didn't props.bridgeData work? It threw error but doesn't through when using redux
              return (
                <>
                  <div className="modal-bridge-unit">
                    <div className="modal-district-country">
                      {bridge.district} District, {bridge.country}
                    </div>
                    <div className="modal-name">{bridge.name}</div>
                  </div>
                </>
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
