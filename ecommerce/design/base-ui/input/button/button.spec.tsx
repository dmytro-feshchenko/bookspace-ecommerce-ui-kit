import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { OutlinedButton, DefaultButton } from './button.composition'
import { Button } from './button'

// it('should render with the correct text', () => {
//   const { getByText } = render(<PrimaryButton />);
//   const rendered = getByText('hello from Button');
//   expect(rendered).toBeTruthy();
// });

const testLoader = <span data-testid="test-loader">loader...</span>

describe('Default button', () => {
  it('should render with children', () => {
    const { getByText } = render(<DefaultButton />);
    const rendered = getByText('Default button');
    expect(rendered).toBeInstanceOf(HTMLElement);
  })

  it('should trigger onClick event', () => {
    const onClick = jest.fn()

    const { getByText } = render(<Button onClick={onClick}>clickable button</Button>)
	  userEvent.click(getByText('clickable button'))

    expect(onClick).toHaveBeenCalled()
  })

  it('should have ref when have prop link', () => {
    const { getByText } = render(<Button href="#link">link button</Button>)

    
  })

  
});

describe('Loading', () => {
  // it('should render a test button', () => {
    // const { getByText } = render(<PrimaryButton />);
    // const testButton = getByText(/test button/i);
    // expect(testButton).toBeInTheDocument();
  // });

  it('should not have loading by default', () => {
    // const 
    const { queryByTestId } = render(<Button>button without loading</Button>);

    expect(queryByTestId('test-loader')).not.toBeInstanceOf(HTMLElement);
  })

  it('should show loader when explicitly set loading={true}', () => {
    const { getByTestId } = render(<Button loading={true} loader={testLoader}>button</Button>);

    expect(getByTestId('test-loader')).toBeInstanceOf(HTMLElement);
  })

  it ('should not show loader when explicitly set loading={false}', () => {
    const { queryByTestId } = render(<Button loading={false} loader={testLoader}>button</Button>);

    expect(queryByTestId('test-loader')).not.toBeInstanceOf(HTMLElement);
  })
});

describe('Outlined button', () => {
  it('should render outlined button with correct variant prop', () => {
    const renderer = render(<OutlinedButton />)
  })
})