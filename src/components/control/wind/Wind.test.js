import { render, screen } from '@testing-library/react';
import Wind from './Wind';

test('renders Wind', () => {
  render(<Wind />);
  const windElement = screen.getByText(/Wind/i);
  expect(windElement).toBeInTheDocument();
});
