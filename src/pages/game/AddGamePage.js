import React from 'react';

import Input from '../../shared/components/FormElement/Input';
import Card from '../../shared/components/UI/Card';

import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';

import './AddGame.css';

export default function AddGamePage() {
  const inputHandler = (id, value, isValid) => {
    console.log(id, value, isValid);
  };

  return (
    <form className='add-game-form'>
      <Card>
        <h1 className='add-game-form__title'>Add Game Form</h1>
        <Input
          id='title'
          label='Title'
          initialValue=''
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
          errorText='This field is required'
        />
        <Input
          id='description'
          label='Description'
          initialValue=''
          validators={[VALIDATOR_MINLENGTH(5)]}
          onInput={inputHandler}
          errorText='Please enter at least 5 characters'
        />
        <Input
          id='developer'
          label='Developer'
          initialValue=''
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
          errorText='This field is required'
        />
        <Input
          id='publisher'
          label='Publisher'
          initialValue=''
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
          errorText='This field is required'
        />
      </Card>
    </form>
  );
}
