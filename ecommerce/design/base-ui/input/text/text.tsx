import React, { HTMLAttributes } from 'react';

export type TextInputProps = {
  /**
   * the name of the input
   */
  name: string

  /**
   * a label describing this input
   */
  label?: string

  /**
   * type of HTML input
   */
  type?: string

} & HTMLAttributes<HTMLInputElement>

const defaultProps = {
  type: 'text',
  label: '',
}

const BaseTextInput = (props: TextInputProps) => {
  return (
    <input {...props} />
  );
}

const TextInputWithLabel = (props: TextInputProps) => {
  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <BaseTextInput {...props}/>
    </>
  )
}

const TextInput = (props: TextInputProps) => {
  return (
    <TextInputWithLabel {...props} />
  )
}

TextInput.defaultProps = defaultProps


export { TextInput }