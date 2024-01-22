import React from 'react';

export default function Alert(props) {
  const capitalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    props.alt && <div className={`alert alert-${props.alt.type}`} role="alert">
      <strong><div>{capitalize(props.alt.type)}</div>{props.alt.msg}</strong>
    </div>
  );
}
