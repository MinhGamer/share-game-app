import React, { useReducer, useEffect } from 'react';

import { validate } from '../../util/validators';

import './Input.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE': {
      return {
        ...state,
        value: action.val,
        //validate value here
        isValid: validate(action.val, action.validators),
      };
    }

    case 'TOUCH': {
      return {
        ...state,
        isTouched: true,
      };
    }

    default:
      return state;
  }
};

export default function Input(props) {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || '',
    isTouched: false,
    isValid: props.valid || false,
  });

  if (props.element === 'textarea') {
  }

  const changeHandler = (e) => {
    dispatch({
      type: 'CHANGE',
      val: e.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({ type: 'TOUCH' });
  };

  const { id, onInput } = props;
  useEffect(() => {
    onInput(id, inputState.value, inputState.isValid);
  }, [id, inputState.value, inputState.isValid, onInput]);

  //set style for form control
  const validStyle =
    inputState.isTouched && inputState.isValid && 'form-control--valid';
  const invalidStyle =
    inputState.isTouched && !inputState.isValid && 'form-control--invalid';
  const formControlStyle = ['form-control', validStyle, invalidStyle].join(' ');

  return (
    <>
      <div className={formControlStyle}>
        <label htmlFor={props.id}>{props.label}</label>
        <input
          id={props.id}
          onBlur={touchHandler}
          onChange={changeHandler}
          value={inputState.value}
        />
        {/* Error text */}
        {inputState.isTouched && !inputState.isValid && (
          <p className='form-control__error-text'>{props.errorText}</p>
        )}
      </div>
    </>
  );
}
