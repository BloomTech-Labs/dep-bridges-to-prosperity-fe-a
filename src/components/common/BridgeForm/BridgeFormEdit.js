import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Input } from 'antd';

function BridgeFormEdit(props) {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    // bridges.push(newBridge);
    console.log(data);
  };

  // Setting up the shape of the data to "PUT" to the bridge dummy data
  const [newBridge, setNewBridge] = useState({
    id: Date.now(),
    site_name: '',
    proj_stage: '',
    latitude: 0,
    longitude: 0,
  });

  const handleChanges = e => {
    // setNewBridge({
    //   ...newBridge,
    //   [e.target.name]: e.target.value,
    // });
  };

  return (
    <>
      <h1>Editing</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* BRIDGE SITE NAME */}
        <input
          placeholder="Bridge Site Name"
          name="site_name"
          onChange={handleChanges}
          value={props.mapData.site_name}
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
          value={props.mapData.proj_stage}
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
          value={props.mapData.latitude}
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
          value={props.mapData.longitude}
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

export default BridgeFormEdit;
