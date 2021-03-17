import React, { useState, useContext } from 'react';

import Card from '../../shared/components/UI/Card';
import Input from '../../shared/components/FormElement/Input';
import Button from '../../shared/components/UI/Button';

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';

import { AuthContext } from '../../shared/context/authContext';

import useForm from '../../shared/customHooks/useForm';
import useHttp from '../../shared/customHooks/useHttp';

import './AuthPage.css';

export default function AuthPage() {
  const { sendRequest, isLoading, error, clearError } = useHttp();
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  );
  const auth = useContext(AuthContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const { email, password } = formState.inputs;

    if (isLoginMode) {
      // login

      const user = {
        email: email.value,
        password: password.value,
      };

      try {
        const res = await sendRequest(
          '/user/login',
          'POST',
          JSON.stringify(user)
        );

        // res: {
        //   userId,
        //   token,
        // }

        console.log(res);

        auth.login(res.userId, res.token);
      } catch (err) {
        console.log(err);
      }
    } else {
      //sign up
      const newUser = {
        name: formState.inputs.name.value,
        email: formState.inputs.email.value,
        password: formState.inputs.password.value,
      };

      try {
        const res = await sendRequest(
          '/user/signup',
          'POST',
          JSON.stringify(newUser)
        );
        //get token
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const switchMode = (e) => {
    e.preventDefault();

    //login up mode : form only have email and password
    //sign up mode : form have one more: name input
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false,
          },
        },
        false
      );
    }

    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
    <form className='auth-form'>
      <Card>
        <h1 className='auth-form__title'>Contact Form</h1>
        {!isLoginMode && (
          <Input
            id='name'
            label='Name'
            type='text'
            initialValue=''
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
          />
        )}

        <Input
          id='email'
          label='Email'
          type='text'
          initialValue=''
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
          onInput={inputHandler}
        />

        <Input
          id='password'
          label='Password'
          type='password'
          initialValue=''
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
          onInput={inputHandler}
        />
        <Button onClick={submitHandler} disabled={!formState.isValid} green>
          {isLoginMode ? 'Login' : 'Sign up'}
        </Button>
        <Button onClick={switchMode} red>
          Switch to {isLoginMode ? 'Sign up' : 'Login'}
        </Button>
      </Card>
    </form>
  );
}
