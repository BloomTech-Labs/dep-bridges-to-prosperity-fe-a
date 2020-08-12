import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Input } from 'antd';

//DUMMY DATA TO BE DELETED:
let mapData = [
  {
    id: 1,
    site_name: 'Buzi',
    proj_stage: 'rejected',
    latitude: -2.42056,
    longitude: 28.9662,
  },
  {
    id: 2,
    site_name: 'Kamigisha',
    proj_stage: 'rejected',
    latitude: -2.42486,
    longitude: 28.95726,
  },
  {
    id: 3,
    site_name: 'Nyarubande',
    proj_stage: 'rejected',
    latitude: -1.65595,
    longitude: 30.07884,
  },
];

function BridgeFormAdd() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    bridges.push(newBridge);
    console.log(bridges);
  };
  // Setting up the dummy bridge state here
  const [bridges, setBridges] = useState(mapData);

  // Setting up the shape of the data to "POST" to the bridge dummy data
  const [newBridge, setNewBridge] = useState({
    id: Date.now(),
    site_name: '',
    proj_stage: '',
    latitude: 0,
    longitude: 0,
  });

  const handleChanges = e => {
    setNewBridge({
      ...newBridge,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* BRIDGE SITE NAME */}
        <input
          placeholder="Bridge Site Name"
          name="site_name"
          onChange={handleChanges}
          value={newBridge.site_name}
          ref={register({ required: true })}
        />
        {errors.site_name && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* PROJECT STAGE */}
        <input
          placeholder="Project Stage"
          name="proj_stage"
          onChange={handleChanges}
          value={newBridge.proj_stage}
          ref={register({ required: true })}
        />
        {errors.site_name && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* LATITUDE */}
        <input
          placeholder="Latitude"
          name="latitude"
          type="number"
          onChange={handleChanges}
          value={newBridge.latitude}
          ref={register({ required: true })}
        />
        {errors.site_name && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* LONGITUDE */}
        <input
          placeholder="Longitude"
          name="longitude"
          type="number"
          onChange={handleChanges}
          value={newBridge.longitude}
          ref={register({ required: true })}
        />
        {errors.site_name && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* SUBMIT */}
        <input type="submit" />
      </form>
    </>
  );
}

export default BridgeFormAdd;
