import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function BridgeFormEdit(props) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = () => {
    console.log(newBridge);
  };

  // Setting up the shape of the data to "PUT" to the bridge dummy data
  const [newBridge, setNewBridge] = useState(props.toEdit);

  const handleChanges = e => {
    setNewBridge({
      ...newBridge,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Editing</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ID */}
        <input placeholder="ID" name="id" value={newBridge.id} readOnly />
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

export default BridgeFormEdit;
