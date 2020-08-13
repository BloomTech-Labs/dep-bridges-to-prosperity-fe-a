import { Input } from 'antd';
// import { AudioOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
// import { searchLocation } from '../../../state/actions';
const { Search } = Input;

const MapSearchBar = props => {
  const [searchResults, setSearchResults] = useState([]);
  //this will work to seet the terms for the search ::below::
  const [searchTerm, setSearchTerm] = useState('');

  function onSearch(event) {
    //console.log(event.target.value);
    setSearchTerm(event.target.value);
    // search(event.target.value, props.mapData);
  }

  useEffect(() => {
    const results = props.mapData.filter(info =>
      info.site_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [props.mapData, searchTerm]);

  //
  // function search(searchTerms, objects) {
  //   var results = [];

  //   for (var i = 0; i < props.mapData.length; i++) {
  //     for (const key in objects[i]) {
  //       if (
  //         objects[i][key]
  //           .toString()
  //           .toLowerCase()
  //           .indexOf(searchTerms.toLowerCase()) !== -1
  //       ) {
  //         results.push(objects[i]);
  //         continue;
  //       }
  //     }
  //   }
  //   console.log('inside searchFun', results);
  //   setSearchVal(results);
  // }

  // const suffix = (
  //   <AudioOutlined
  //     style={{
  //       fontSize: 16,
  //       color: '#1890ff',
  //     }}
  //   />
  // );

  return (
    <>
      <Search value={searchTerm} placeholder="search" onChange={onSearch} />

      <div>
        {searchResults.map(item => {
          console.log('search', item);
          return (
            <div style={{ backgroundColor: 'black', color: 'white' }}>
              <h2>Site: {item.site_name}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default MapSearchBar;
