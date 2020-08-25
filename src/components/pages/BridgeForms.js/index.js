import React from 'react';
import { BridgeForm } from '../../common/BridgeForm';

function BridgeForms({ changeShow, changeIsEditing, isEditing }) {
  return (
    <BridgeForm
      changeShow={changeShow}
      changeIsEditing={changeIsEditing}
      isEditing={isEditing}
    />
  );
}

export default BridgeForms;
