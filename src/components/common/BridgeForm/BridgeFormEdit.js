import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { editBridge, getAllBridges } from '../../../state/actions';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';

function BridgeFormEdit({ bridge, authState, changeIsEditing, changeShow }) {
  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();

  /******* TO EDIT BRIDGE *******/
  // Setting up the shape of the data to "PUT" to the bridge dummy data
  const [newBridge, setNewBridge] = useState(bridge);

  const handleChanges = e => {
    newBridge.individuals_directly_served = parseFloat(
      newBridge.individuals_directly_served
    );
    setNewBridge({
      ...newBridge,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    // parsing some inputs into integers
    newBridge.span = parseFloat(newBridge.span);
    newBridge.latitude = parseFloat(newBridge.latitude);
    newBridge.longitude = parseFloat(newBridge.longitude);
    newBridge.individuals_directly_served = parseFloat(
      newBridge.individuals_directly_served
    );

    // deleting communities served array from sent data
    delete newBridge['communities_served'];

    dispatch(editBridge(newBridge, authState.idToken));
    window.localStorage.removeItem('bridge');
    changeIsEditing();
    changeShow();
  };

  /******** TO DELETE BRIDGE *******/
  const deleteBridge = idToken => {
    if (window.confirm('Are you sure you want to DELETE this bridge?')) {
      axiosWithAuth(idToken)
        .delete(`/bridges/${bridge.id}`)
        .then(res => {
          changeIsEditing();
          changeShow();
          dispatch(getAllBridges());
        });
    } else {
      console.log('You canceled the delete action');
    }
  };

  return (
    <>
      <h1>Editing {bridge.name}</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="edit-form-cont-inner">
        {/* BRIDGE SITE NAME */}
        <label className="name">
          Bridge Site Name
          <input
            placeholder="Ex: Buzi"
            name="name"
            onChange={handleChanges}
            value={newBridge.name}
            ref={register({ required: true })}
          />
        </label>
        {errors.name && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* PROJECT CODE */}
        <label className="p-code">
          Project Code
          <input
            placeholder="Ex: 1024"
            name="project_code"
            onChange={handleChanges}
            value={newBridge.project_code}
            ref={register({ required: true })}
          />
        </label>
        {errors.project_code && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* PROJECT STAGE */}
        <label className="p-stage">
          Project Stage
          <select
            name="stage"
            id="stage"
            onChange={handleChanges}
            value={newBridge.stage}
            ref={register({ required: true })}
          >
            <option value="Accepted">Accepted</option>
            <option value="Rejected">Rejected</option>
            <option value="Identified">Identified</option>
          </select>
        </label>
        {errors.stage && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* SUB STAGE */}
        <label className="sub-stage">
          Sub Stage
          <select
            name="sub_stage"
            id="sub_stage"
            onChange={handleChanges}
            value={newBridge.sub_stage}
            ref={register({ required: true })}
          >
            <option value="Technical">Technical</option>
            <option value="Requested">Requested</option>
          </select>
        </label>
        {errors.sub_stage && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* LATITUDE */}
        <label className="lat">
          Latitude
          <input
            placeholder="Ex: -1234"
            name="latitude"
            type="number"
            onChange={handleChanges}
            value={newBridge.latitude}
            ref={register({ required: true })}
          />
        </label>
        {errors.latitude && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* LONGITUDE */}
        <label className="lon">
          Longitude
          <input
            placeholder="Ex: 1234"
            name="longitude"
            type="number"
            onChange={handleChanges}
            value={newBridge.longitude}
            ref={register({ required: true })}
          />
        </label>
        {errors.longitude && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* INDIVIDUALS SERVED */}
        <label className="served">
          Individuals Served
          <input
            placeholder="Ex: 240"
            name="individuals_directly_served"
            type="number"
            onChange={handleChanges}
            value={newBridge.individuals_directly_served}
            ref={register({ required: false })}
          />
        </label>
        {/* SPAN */}
        <label className="span">
          Span
          <input
            placeholder="Length in meters"
            name="span"
            type="number"
            onChange={handleChanges}
            value={newBridge.span}
            ref={register({ required: false })}
          />
        </label>
        {/* TYPE */}
        <label className="b-type">
          Bridge Type
          <select
            name="type"
            id="type"
            onChange={handleChanges}
            value={newBridge.type}
            ref={register({ required: true })}
          >
            <option value="Suspended">Suspended</option>
            <option value="Suspension">Suspension</option>
            <option value="Other">Other</option>
          </select>
        </label>
        {errors.type && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* COUNTRY */}
        <label className="country">
          Country
          <input
            placeholder="Ex: Rwanda"
            name="country"
            onChange={handleChanges}
            value={newBridge.country}
            ref={register({ required: true })}
          />
        </label>
        {errors.country && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* PROVINCE */}
        <label className="province">
          Province
          <input
            placeholder="Ex: Western Province"
            name="province"
            onChange={handleChanges}
            value={newBridge.province}
            ref={register({ required: true })}
          />
        </label>
        {errors.province && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* SECTOR */}
        <label className="sector">
          Sector
          <input
            placeholder="Ex: Giheke"
            name="sector"
            onChange={handleChanges}
            value={newBridge.sector}
            ref={register({ required: true })}
          />
        </label>
        {errors.sector && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* CELL */}
        <label className="cell">
          Cell
          <input
            placeholder="Ex: Gakomeye"
            name="cell"
            onChange={handleChanges}
            value={newBridge.cell}
            ref={register({ required: true })}
          />
        </label>
        {errors.cell && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* FORM NAME */}
        <label className="f-name">
          Form Name
          <input
            placeholder="Ex: Project Assessment - 2018.10.29"
            name="form_name"
            onChange={handleChanges}
            value={newBridge.form_name}
            ref={register({ required: true })}
          />
        </label>
        {errors.form_name && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* CASE SAFE ID FORM */}
        <label className="CSIF">
          Case Safe ID Form
          <input
            placeholder="Ex: a1if1002ejd77"
            name="case_safe_id_form"
            onChange={handleChanges}
            value={newBridge.case_safe_id_form}
            ref={register({ required: true })}
          />
        </label>
        {errors.case_safe_id_form && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* BRIDGE OPPORTUNITY ID */}
        <label className="BOI">
          Bridge Opportunity Name
          <input
            placeholder="Ex: 0067kaf894a"
            name="bridge_opportunity_id"
            onChange={handleChanges}
            value={newBridge.bridge_opportunity_id}
            ref={register({ required: true })}
          />
        </label>
        {errors.bridge_opportunity_id && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* SUBMIT */}
        <input className="submit" type="submit" />
        <button
          className="delete-button"
          onClick={() => deleteBridge(authState.idToken)}
        >
          Delete Bridge
        </button>
      </form>
    </>
  );
}

export default BridgeFormEdit;
