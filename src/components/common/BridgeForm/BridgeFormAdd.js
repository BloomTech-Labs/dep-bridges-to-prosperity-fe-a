import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { post } from '../../../state/actions';

function BridgeFormAdd(props) {
  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(post(newBridge));
  };

  // GENERATING RANDOM NUM FOR BRIDGE ID!
  function numGenerator() {
    let num = Math.round(Math.random() * 1000);
    return num;
  }

  // Setting up the shape of the data to "POST" to the bridge dummy data
  const [newBridge, setNewBridge] = useState({
    id: numGenerator(),
    individualsDirectlyServed: 1,
    latitude: 1,
    longitude: 1,
    name: '',
    span: 1,
    stage: '',
    subStage: '',
    type: '',
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
          name="name"
          onChange={handleChanges}
          value={newBridge.name}
          ref={register({ required: true })}
        />
        {errors.site_name && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* PROJECT STAGE */}
        <input
          placeholder="Project Stage"
          name="stage"
          onChange={handleChanges}
          value={newBridge.stage}
          ref={register({ required: true })}
        />
        {errors.site_name && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* SUB STAGE */}
        <input
          placeholder="Sub Stage"
          name="subStage"
          onChange={handleChanges}
          value={newBridge.subStage}
          ref={register({ required: false })}
        />
        {/* LATITUDE */}
        <label style={{ display: 'flex', flexDirection: 'column' }}>
          Latitude
          <input
            placeholder="Latitude"
            name="latitude"
            type="number"
            onChange={handleChanges}
            value={newBridge.latitude}
            ref={register({ required: true })}
          />
        </label>
        {errors.site_name && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* LONGITUDE */}
        <label style={{ display: 'flex', flexDirection: 'column' }}>
          Longitude
          <input
            placeholder="Longitude"
            name="longitude"
            type="number"
            onChange={handleChanges}
            value={newBridge.longitude}
            ref={register({ required: true })}
          />
        </label>
        {errors.site_name && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* INDIVIDUALS SERVED */}
        <label style={{ display: 'flex', flexDirection: 'column' }}>
          Individuals Served
          <input
            placeholder="Individuals Served"
            name="individualsDirectlyServed"
            type="number"
            onChange={handleChanges}
            value={newBridge.individualsDirectlyServed}
            ref={register({ required: false })}
          />
        </label>
        {/* SPAN */}
        <label style={{ display: 'flex', flexDirection: 'column' }}>
          Span
          <input
            placeholder="Span"
            name="Span"
            type="number"
            onChange={handleChanges}
            value={newBridge.span}
            ref={register({ required: false })}
          />
        </label>
        {/* TYPE */}
        <input
          placeholder="Bridge Type"
          name="type"
          onChange={handleChanges}
          value={newBridge.type}
          ref={register({ required: false })}
        />
        {/* SUBMIT */}
        <input type="submit" />
      </form>
    </>
  );
}

export default BridgeFormAdd;
