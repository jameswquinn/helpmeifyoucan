import { h } from 'preact';
import { render, fireEvent, screen } from '@testing-library/preact';
import { HelloWorld } from '../components/HelloWorld';

describe('HelloWorld', () => {
  it('renders Hello, World! text', () => {
    render(<HelloWorld />);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });

  it('increments count when button is clicked', () => {
    render(<HelloWorld />);
    const button = screen.getByText('Click me');
    fireEvent.click(button);
    expect(screen.getByText('You clicked 1 times')).toBeInTheDocument();
  });
});
