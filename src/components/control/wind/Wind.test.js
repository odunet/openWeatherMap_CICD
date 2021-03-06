import { render, screen } from '@testing-library/react';
import Wind from './Wind';
import toJson from 'enzyme-to-json';
import Enzyme, { shallow, mount } from 'enzyme';

describe('Render Temperature UI', () => {
  test('renders Wind', () => {
    render(<Wind />);
    const windElement = screen.getByText(/Wind/i);
    expect(windElement).toBeInTheDocument();
  });
});

describe('Snapshot', () => {
  test('Should take a snapshot of Wind component', () => {
    const container = shallow(<Wind />);
    expect(toJson(container)).toMatchSnapshot();
  });
});
