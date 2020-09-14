import { Checkbox } from 'antd';
import React from 'react';

const Checkboxes = () => {
  return (
    <section style={{ display: 'flex' }}>
      {/* BUILD STATUS */}
      <ul style={{ listStyle: 'none' }}>
        <h3>Build Status</h3>
        <li>
          <Checkbox>Accepted</Checkbox>
        </li>
        <li>
          <Checkbox>I'm a checkbox</Checkbox>
        </li>
      </ul>
      {/* COMMUNITIES SERVED */}
      <ul style={{ listStyle: 'none' }}>
        <h3>Communities Served</h3>
        <li>
          <Checkbox>Any Range</Checkbox>
        </li>
        <li>
          <Checkbox>0-5</Checkbox>
        </li>
        <li>
          <Checkbox>5+</Checkbox>
        </li>
        <li>
          <Checkbox>10+</Checkbox>
        </li>
      </ul>
    </section>
  );
};

export default Checkboxes;
