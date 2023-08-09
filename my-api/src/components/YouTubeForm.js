import React from 'react';
import './styling/YouTubeForm.css';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

let renderCount = 0;

export const YouTubeForm = () => {
  const form = useForm();
  const { register, control, handleSubmit } = form;

  const onSubmit = (data) => {
    console.log('Form submitted', data);
  };
  //   const { register, handleSubmit } = useForm();

  //   const { name, ref, onChange, onBlur } = register('username');
  renderCount++;
  return (
    <div>
      <h1>Render Count: {renderCount / 2}</h1>
      <h1>YouTubeForm</h1>
      <h2>Register a new user</h2>
      <p>
        <em>
          <strong>Note:</strong> This form uses React Hook Form.
        </em>
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='userName'> Username </label>
        <input type='text' id='userName' {...register('userName')} />
        <label htmlFor='email'> Email </label>
        <input type='email' id='email' {...register('email')} />
        <label htmlFor='channel'> Channel </label>
        <input type='text' id='channel' {...register('channel')} />
        <button> Submit </button>
      </form>
      <h2>Register a new user ({renderCount / 2})</h2>

      <input type='text'></input>
      <button> Submit </button>

      <DevTool control={control} placement='top-right' />
    </div>
  );
};

export default YouTubeForm;
