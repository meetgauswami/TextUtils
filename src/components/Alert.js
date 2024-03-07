import React from 'react'

function Alert(props) {
  const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    <div style={{height: '0px'}}>
      { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show my-5`} role="alert" style={{ position: 'absolute', top:'1.3rem', right: '0%', width: '100%', textAlign:'center'}}>
     <strong>{capitalize(props.alert.type)} </strong> : {props.alert.msg}
  </div>}
  </div>
  )
}

export default Alert
