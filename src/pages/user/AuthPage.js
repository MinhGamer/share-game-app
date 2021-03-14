import React, { useState } from 'react';

import Card from '../../shared/components/UI/Card';
import Input from '../../shared/components/FormElement/Input';
import Button from '../../shared/components/UI/Button';

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';

import useForm from '../../shared/customHooks/useForm';

import './AuthPage.css';

export default function AuthPage() {
  const [isLoginMode, setIsLoginMode] = useState(false);

  const [formState, inputHandler] = useForm(
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

  const switchMode = (e) => {
    e.preventDefault();
    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
    <form className='auth-form'>
      <Card>
        <h1 className='auth-form__title'>Login</h1>
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
        <Button disabled={!formState.isValid} green>
          {isLoginMode ? 'Login' : 'Sign up'}
        </Button>
        <Button onClick={switchMode} red>
          Switch to {isLoginMode ? 'Sign up' : 'Login'}
        </Button>
      </Card>
    </form>
  );
}
