import React, { useContext } from 'react';

import Input from '../../shared/components/FormElement/Input';
import Card from '../../shared/components/UI/Card';
import Button from '../../shared/components/UI/Button';

import useForm from '../../shared/customHooks/useForm';

import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';

import './AddGame.css';

import useHttp from '../../shared/customHooks/useHttp';

import { AuthContext } from '../../shared/context/authContext';

export default function AddGamePage(props) {
  const auth = useContext(AuthContext);
  const { sendRequest, isLoading, error, clearError } = useHttp();
  const [formState, inputHandler] = useForm(
    {
      title: { value: '', isValid: false },
      description: { value: '', isValid: false },
    },
    false
  );

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log(formState.inputs);

    const newGame = {
      title: formState.inputs.title.value,
      description: formState.inputs.description.value,
      creatorId: auth.userId,
    };
    console.log(newGame);

    try {
      const data = await sendRequest('game', 'POST', JSON.stringify(newGame));

      console.log(data);
    } catch (err) {
      console.log(err);
    }
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
