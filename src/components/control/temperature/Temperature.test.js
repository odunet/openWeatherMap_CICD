import { render, screen } from '@testing-library/react';
import Temperature from './Temperature';

test('renders Temperature', () => {
  render(<Temperature />);
  const temperatureElement = screen.getByText(/Temperature/i);
  expect(temperatureElement).toBeInTheDocument();
});