import { Input, Card } from 'antd';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchLocation } from '../../../state/actions';
import { useForm } from 'react-hook-form';

const { Search } = Input;

const MapSearchBar = props => {
  const dispatch = useDispatch();
  const { onClose, visible, clickedBridge } = props;
  const { register } = useForm();

  const [searchResults, setSearchResults] = useState([]);

  function onSearch(data) {
    data.preventDefault();
    console.log(data.target.value);
    const results = props.bridgeData.filter(info =>
      info.name.toLowerCase().includes(data.target.value.toLowerCase())
    );

    setSearchResults(results);
    console.log('search rsults:', searchResults);
  }

  useEffect(() => {
    dispatch(searchLocation());
  }, [dispatch]);

  return (
    <>
      <Search
        placeholder="search"
        onChange={onSearch}
        ref={register}
        name="search"
      />

      <div>
        <Card visible={visible}>
          <h2>
            Active:
            <br /> {clickedBridge.name}
            <button onClick={onClose}>Close</button>
          </h2>
        </Card>
        {searchResults.map(item => {
          console.log('search,', item);
          return (
            <Card size="small">
              <h2>{item.name}</h2>
              <p></p>
            </Card>
          );
        })}
      </div>
    </>
  );
};
export default MapSearchBar;
