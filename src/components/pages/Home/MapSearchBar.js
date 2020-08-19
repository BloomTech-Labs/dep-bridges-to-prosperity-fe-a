import { Input, Card } from 'antd';
import React, { useState } from 'react';

import { useForm } from 'react-hook-form';

const { Search } = Input;

const MapSearchBar = props => {
  const { onClose, clickedBridge } = props;
  const { register } = useForm();

  const [searchResults, setSearchResults] = useState([]);

  function onSearch(data) {
    console.log(data.target.value);
    const results = props.bridgeData.filter(
      info =>
        info.name.toLowerCase().includes(data.target.value.toLowerCase()) ||
        info.type.toLowerCase().includes(data.target.value.toLowerCase()) ||
        info.stage.toLowerCase().includes(data.target.value.toLowerCase())
    );

    setSearchResults(results);
    console.log('search rsults:', searchResults);
  }

  return (
    <>
      <Search
        placeholder="search"
        onChange={onSearch}
        ref={register}
        name="search"
      />

      <div>
        <Card>
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

              <ul>
                <li>Site ID: {item.id}</li>
                <li>Bridge Type: {item.type}</li>
                <li>Bridge Stage: {item.stage}</li>
                <li>Individuals Served: {item.individualsDirectlyServed}</li>
                <li>Latitude: {item.latitude}</li>
                <li>Longitude: {item.longitude}</li>
              </ul>
            </Card>
          );
        })}
      </div>
    </>
  );
};
export default MapSearchBar;
