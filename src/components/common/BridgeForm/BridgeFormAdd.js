import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addBridge } from '../../../state/actions';

function BridgeFormAdd(props) {
  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(addBridge(newBridge));
  };
  console.log('Bridges', props.bridges);

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
      <h1>Adding</h1>
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
