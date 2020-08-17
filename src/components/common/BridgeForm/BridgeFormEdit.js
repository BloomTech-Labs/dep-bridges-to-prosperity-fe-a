import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { patch, fetchBridges } from '../../../state/actions';

function BridgeFormEdit(props) {
  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log(newBridge);
    dispatch(patch(newBridge));
    props.toggleEditing();
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
        {/* <input placeholder="ID" name="id" value={newBridge.id} readOnly /> */}
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
        {/* INDIVIDUALS SERVED */}
        <input
          placeholder="Individuals Served"
          name="individualsDirectlyServed"
          type="number"
          onChange={handleChanges}
          value={newBridge.individualsDirectlyServed}
          ref={register({ required: false })}
        />
        {/* SPAN */}
        <input
          placeholder="Span"
          name="Span"
          type="number"
          onChange={handleChanges}
          value={newBridge.span}
          ref={register({ required: false })}
        />
        {/* TYPE */}
        <input
          placeholder="Bridge Type"
          name="Type"
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

export default BridgeFormEdit;
