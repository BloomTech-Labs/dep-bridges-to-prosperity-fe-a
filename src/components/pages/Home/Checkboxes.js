import React from 'react';
import { Checkbox } from 'antd';
import { useDispatch } from 'react-redux';
import { filterData, unfilter } from '../../../state/actions';

const Checkboxes = ({ toggleBridges }) => {
  const dispatch = useDispatch();
  const onChange = e => {
    if (e.target.checked === false) {
      dispatch(unfilter(e.target.name));
      toggleBridges();
    }
    dispatch(filterData(e.target.name));
    toggleBridges();
    console.log(`checked = ${e.target.name}`);
  };

  return (
    <section>
      <ul style={{ listStyle: 'none' }}>
        {/* BUILD STATUS */}
        <h3>Build Status</h3>
        <li>
          <Checkbox name="accepted" onChange={onChange}>
            Accepted
          </Checkbox>
        </li>
        <li>
          <Checkbox name="rejected" onChange={onChange}>
            Rejected
          </Checkbox>
        </li>
      </ul>
      {/* COMMUNITIES SERVED */}
      <ul style={{ listStyle: 'none' }}>
        <h3>Communities Served</h3>
        <li>
          <Checkbox name="any range" onChange={onChange}>
            Any Range
          </Checkbox>
        </li>
        <li>
          <Checkbox name="0-5" onChange={onChange}>
            0-5
          </Checkbox>
        </li>
        <li>
          <Checkbox name="5+" onChange={onChange}>
            5+
          </Checkbox>
        </li>
        <li>
          <Checkbox name="10+" onChange={onChange}>
            10+
          </Checkbox>
        </li>
      </ul>
    </section>
  );
};

export default Checkboxes;
