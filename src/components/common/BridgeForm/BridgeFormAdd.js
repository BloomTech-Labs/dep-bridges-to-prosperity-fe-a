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
        <label htmlFor="stage">Project Stage</label>
        <select
          name="stage"
          id="stage"
          onChange={handleChanges}
          ref={register({ required: true })}
        >
          <option value="Accepted">Accepted</option>
          <option value="Rejected">Rejected</option>
          <option value="Identified">Identified</option>
        </select>
        {errors.site_name && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* SUB STAGE */}
        <label htmlFor="subStage">Sub Stage</label>
        <select
          name="subStage"
          id="subStage"
          onChange={handleChanges}
          ref={register({ required: true })}
        >
          <option value="Technical">Technical</option>
          <option value="Requested">Requested</option>
        </select>
        {errors.site_name && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
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
        <label htmlFor="type">Bridge Type</label>
        <select
          name="type"
          id="type"
          onChange={handleChanges}
          ref={register({ required: true })}
        >
          <option value="Suspended">Suspended</option>
          <option value="Suspension">Suspension</option>
          <option value="Other">Other</option>
        </select>
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
