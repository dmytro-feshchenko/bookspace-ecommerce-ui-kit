import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BasicTextInput } from './text.composition'

// it('should render with the correct text', () => {
//   const { getByText } = render(<BasicTextInput />)
//   const rendered = getByText('hello from Text')
//   expect(rendered).toBeTruthy()
// })

describe('Input', () => {
  it('should render empty input with label by default', () => {
    const { getByLabelText } = render(<BasicTextInput />)

    userEvent.type(screen.getByLabelText("Basic test input"), 'test value')
    expect(getByLabelText('Basic test input')).toHaveValue('test value')
  })
})

// describe('Textarea', () => {
//   it('should render textarea with multiline prop', () => {

//   })
// })