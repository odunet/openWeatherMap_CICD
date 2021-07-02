import { render, screen } from '@testing-library/react';
import Title from './Title';

test('renders Title', () => {
  render(<Title />);
  const titleElement = screen.getByText(/Title/i);
  expect(titleElement).toBeInTheDocument();
});