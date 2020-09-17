import React, { useState } from 'react';
import { Checkbox } from 'antd';
import { useDispatch } from 'react-redux';
import { filterData } from '../../../state/actions';

const Checkboxes = ({ cancelModal }) => {
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
    cancelModal();
  };

  return (
    <section>
      <ul style={{ listStyle: 'none' }}>
        {/* BUILD STATUS */}
        <h3>Build Status</h3>
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
          <Checkbox value="0-5" onChange={onChange}>
            0-5
          </Checkbox>
        </li>
        <li>
          <Checkbox name="5+" onChange={onChange}>
            5+
          </Checkbox>
        </li>
        <li>
          <Checkbox value="10+" onChange={onChange}>
            10+
          </Checkbox>
        </li>
      </ul>
      <button onClick={filter}>Filter</button>
    </section>
  );
};

export default Checkboxes;
