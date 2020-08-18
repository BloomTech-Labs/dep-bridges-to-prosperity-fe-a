import { Input, Card } from 'antd';
// import { AudioOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { searchLocation } from '../../../state/actions';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const { Search } = Input;

const MapSearchBar = props => {
  const { register } = useForm();

  const [searchResults, setSearchResults] = useState([]);

  function onSearch(data) {
    console.log(data.target.value);

    //setSearchTerm(event.target.value);
    const results = props.mapData.filter(info =>
      info.name.toLowerCase().includes(data.target.value.toLowerCase())
    );

    setSearchResults(results);
    console.log('search rsults:', searchResults);
  }

  // useEffect(() => {

  // }, [props.mapData, searchTerm]);

  // useEffect(() => {
  //   dispatch(searchLocation());
  // }, [dispatch]);

  return (
    <>
      <Search
        placeholder="search"
        onChange={onSearch}
        ref={register}
        name="search"
      />

      <div>
        <Card visible={props.visible}>
          <h2>
            Active:
            <br /> {props.clickedBridge.name}
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
