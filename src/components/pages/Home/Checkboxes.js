import React, { useState } from 'react';
import { Checkbox } from 'antd';
import { useDispatch } from 'react-redux';
import { filterData } from '../../../state/actions';

const Checkboxes = ({ toggleBridges, cancelModal }) => {
  const dispatch = useDispatch();
  const [cache, setCache] = useState({});

  const onChange = e => {
    if (e.target.checked && e.target.value in cache === false) {
      cache[e.target.value] = e.target.checked;
    } else if (!e.target.checked && e.target.value in cache === true) {
      delete cache[e.target.value];
    }
    console.log(cache);
  };

  const filter = e => {
    dispatch(filterData(cache));
    toggleBridges();
    cancelModal();
  };

  return (
    <>
      <section
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}
      >
        <ul style={{ listStyle: 'none' }}>
          {/* PROJECT STAGE */}
          <h3>Project Stage</h3>
          <li>
            <Checkbox value="accepted" onChange={onChange}>
              Accepted
            </Checkbox>
          </li>
          <li>
            <Checkbox value="rejected" onChange={onChange}>
              Rejected
            </Checkbox>
          </li>
          <li>
            <Checkbox value="identified" onChange={onChange}>
              Identified
            </Checkbox>
          </li>
        </ul>
        {/* SUB STAGE */}
        <ul style={{ listStyle: 'none' }}>
          <h3>Project Sub Stage</h3>
          <li>
            <Checkbox value="requested" onChange={onChange}>
              Requested
            </Checkbox>
          </li>
          <li>
            <Checkbox value="technical" onChange={onChange}>
              Technical
            </Checkbox>
          </li>
        </ul>
        {/* COMMUNITIES SERVED */}
        <ul style={{ listStyle: 'none' }}>
          <h3>Communities Served</h3>
          <li>
            <Checkbox value="any range" onChange={onChange}>
              Any Range
            </Checkbox>
          </li>
          <li>
            <Checkbox value={0} onChange={onChange}>
              Less than 5
            </Checkbox>
          </li>
          <li>
            <Checkbox value={5} onChange={onChange}>
              5+
            </Checkbox>
          </li>
          <li>
            <Checkbox value={10} onChange={onChange}>
              10+
            </Checkbox>
          </li>
        </ul>
        {/* BRIDGE TYPE */}
        <ul style={{ listStyle: 'none' }}>
          <h3>Bridge Type</h3>
          <li>
            <Checkbox value="suspended" onChange={onChange}>
              Suspended
            </Checkbox>
          </li>
          <li>
            <Checkbox value="suspension" onChange={onChange}>
              Suspension
            </Checkbox>
          </li>
          <li>
            <Checkbox value="other" onChange={onChange}>
              Other
            </Checkbox>
          </li>
        </ul>
        {/* PROVINCE */}
        <ul style={{ listStyle: 'none' }}>
          <h3>Province</h3>
          <li>
            <Checkbox value="western province" onChange={onChange}>
              Western Province
            </Checkbox>
          </li>
          <li>
            <Checkbox value="eastern province" onChange={onChange}>
              Eastern Province
            </Checkbox>
          </li>
          <li>
            <Checkbox value="northern province" onChange={onChange}>
              Northern Province
            </Checkbox>
          </li>
          <li>
            <Checkbox value="southern province" onChange={onChange}>
              Southern Province
            </Checkbox>
          </li>
        </ul>
      </section>
      <div className="filter-cont">
        <button className="submit" onClick={filter}>
          Filter
        </button>
      </div>
    </>
  );
};

export default Checkboxes;
