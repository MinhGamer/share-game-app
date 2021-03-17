import React from 'react';

import './LoadingSpinner.css';

export default function LoadingSpinner(props) {
  return (
    <div className={props.asOverlay && 'loading-spinner__overlay'}>
      <div class='lds-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
