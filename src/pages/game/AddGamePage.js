import React from 'react';

// import GameItem from '../../components/game/GameItem';

import Input from '../../shared/components/FormElement/Input';
import Card from '../../shared/components/UI/Card';
import Button from '../../shared/components/UI/Button';

import useForm from '../../shared/customHooks/useForm';

import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';

import './AddGame.css';

export default function AddGamePage(props) {
  const [formState, inputHandler] = useForm(
    {
      title: { value: '', isValid: false },
      developer: { value: '', isValid: false },
    },
    false
  );

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className='add-game-form'>
        <Card>
          <h1 className='add-game-form__title'>Add Game Form</h1>
          <Input
            id='title'
            label='Title'
            initialValue=''
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
          />
          <Input
            id='description'
            label='Description'
            initialValue=''
            validators={[VALIDATOR_MINLENGTH(5)]}
            onInput={inputHandler}
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
          <Button disabled={!formState.isValid} green onClick={submitHandler}>
            Submit
          </Button>
        </Card>
      </form>

      {/* <GameItem game={game} /> */}
    </>
  );
}
