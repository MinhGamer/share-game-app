import React from 'react';

import Input from '../../shared/components/FormElement/Input';

import Button from '../../shared/components/UI/Button';

import useForm from '../../shared/customHooks/useForm';

import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';

import './GameForm.css';

export default function GameForm(props) {
  const { game, onSubmit, onCancle, isUpdateMode } = props;

  const [formState, inputHandler] = useForm(
    {
      title: { value: '', isValid: false },
      description: { value: '', isValid: false },
    },
    false
  );

  const submitHandler = (e) => {
    e.preventDefault();

    onSubmit(formState);
  };

  console.log(game);

  return (
    <form className='game-form'>
      <h1 className='game-form__title'>
        {isUpdateMode ? '' : 'Add Game Form'}
      </h1>
      <Input
        id='title'
        label='Title'
        initialValue={game.title}
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
        initialValid={isUpdateMode}
      />
      <Input
        id='description'
        label='Description'
        initialValue={game.description}
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={inputHandler}
        initialValid={isUpdateMode}
      />
      {/* <Input
      id='developer'
      label='Developer'
      initialValue=''
      validators={[VALIDATOR_REQUIRE()]}
      onInput={inputHandler}
    /> */}
      {/* <Input
      id='publisher'
      label='Publisher'
      initialValue=''
      validators={[VALIDATOR_REQUIRE()]}
      onInput={inputHandler}
    /> */}

      <Button black onClick={onCancle}>
        Cancle
      </Button>

      <Button disabled={!formState.isValid} green onClick={submitHandler}>
        {isUpdateMode ? 'Update' : 'Submit'}
      </Button>
    </form>
  );
}
