import React from 'react';

const FormField = (props) => {
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className="control">
        <input className="input" type={props.type} name={props.name} placeholder={props.placeholder} value={props.value} onChange={ e => props.handleChange(e)}/>
      </div>
    </div>
  )
}

export default FormField;