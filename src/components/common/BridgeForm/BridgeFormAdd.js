import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addNewBridge } from '../../../state/actions';

function BridgeFormAdd({ authState }) {
  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    console.log('new bridge data:', data);
    dispatch(addNewBridge(data, authState.idToken));
  };

  return (
    <>
      <h2>Add New Bridge</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* BRIDGE SITE NAME */}
        <label htmlFor="name">Bridge Site Name</label>
        <input
          placeholder="Ex: Buzi"
          name="name"
          ref={register({ required: true })}
        />
        {errors.name && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* PROJECT CODE */}
        <label htmlFor="projectCode">Project Code</label>
        <input
          placeholder="Ex: 1024"
          name="projectCode"
          ref={register({ required: true })}
        />
        {errors.projectCode && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* PROJECT STAGE */}
        <label htmlFor="stage">Project Stage</label>
        <select name="stage" id="stage" ref={register({ required: true })}>
          <option value="Accepted">Accepted</option>
          <option value="Rejected">Rejected</option>
          <option value="Identified">Identified</option>
        </select>
        {errors.stage && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* SUB STAGE */}
        <label htmlFor="subStage">Sub Stage</label>
        <select
          name="subStage"
          id="subStage"
          ref={register({ required: true })}
        >
          <option value="Technical">Technical</option>
          <option value="Requested">Requested</option>
        </select>
        {errors.subStage && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* LATITUDE */}
        <label style={{ display: 'flex', flexDirection: 'column' }}>
          Latitude
          <input
            placeholder="Ex: -1234"
            name="latitude"
            type="number"
            ref={register({ required: true })}
          />
        </label>
        {errors.latitude && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* LONGITUDE */}
        <label style={{ display: 'flex', flexDirection: 'column' }}>
          Longitude
          <input
            placeholder="Ex: 1234"
            name="longitude"
            type="number"
            ref={register({ required: true })}
          />
        </label>
        {errors.longitude && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* INDIVIDUALS SERVED */}
        <label style={{ display: 'flex', flexDirection: 'column' }}>
          Individuals Served
          <input
            placeholder="How many individuals does/would this bridge serve?"
            name="individualsDirectlyServed"
            type="number"
            ref={register({ required: false })}
          />
        </label>
        {/* SPAN */}
        <label style={{ display: 'flex', flexDirection: 'column' }}>
          Span
          <input
            placeholder="How long does/would this bridge span?"
            name="span"
            type="number"
            ref={register({ required: false })}
          />
        </label>
        {/* TYPE */}
        <label htmlFor="type">Bridge Type</label>
        <select name="type" id="type" ref={register({ required: true })}>
          <option value="Suspended">Suspended</option>
          <option value="Suspension">Suspension</option>
          <option value="Other">Other</option>
        </select>
        {errors.type && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* COUNTRY */}
        <label htmlFor="country">Country</label>
        <input
          placeholder="Ex: Rwanda"
          name="country"
          ref={register({ required: true })}
        />
        {errors.country && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* PROVINCE */}
        <label htmlFor="province">Province</label>
        <input
          placeholder="Ex: Western Province"
          name="province"
          ref={register({ required: true })}
        />
        {errors.province && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* SECTOR */}
        <label htmlFor="sector">Sector</label>
        <input
          placeholder="Ex: Giheke"
          name="sector"
          ref={register({ required: true })}
        />
        {errors.sector && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* CELL */}
        <label htmlFor="cell">Cell</label>
        <input
          placeholder="Ex: Gakomeye"
          name="cell"
          ref={register({ required: true })}
        />
        {errors.cell && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* FORM NAME */}
        <label htmlFor="formName">Form Name</label>
        <input
          placeholder="Ex: Project Assessment - 2018.10.29"
          name="formName"
          ref={register({ required: true })}
        />
        {errors.formName && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* CASE SAFE ID FORM */}
        <label htmlFor="caseSafeIdForm">Case Safe ID Form</label>
        <input
          placeholder="Ex: a1if1002ejd77"
          name="caseSafeIdForm"
          ref={register({ required: true })}
        />
        {errors.caseSafeIdForm && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* BRIDGE OPPORTUNITY ID */}
        <label htmlFor="bridgeOpportunityId">Bridge Opportunity Name</label>
        <input
          placeholder="Ex: 0067kaf894a"
          name="bridgeOpportunityId"
          ref={register({ required: true })}
        />
        {errors.bridgeOpportunityId && (
          <h3 style={{ color: 'red' }}>This is a required field</h3>
        )}
        {/* SUBMIT */}
        <input type="submit" />
      </form>
    </>
  );
}

export default BridgeFormAdd;
