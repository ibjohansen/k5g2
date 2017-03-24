import React, {Component, PropTypes} from 'react';

export default (props) => {
  return <div className="section page404">
    <div className="row">
      {`Siden ${props.location} finnes ikke`}
    </div>
  </div>;
}