import { h } from 'preact';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyComponent from '../components/MyComponent';

test('renders MyComponent', () => {
  render(<MyComponent />);
  expect(screen.getByText('Hello, Preact!')).toBeInTheDocument();
});
