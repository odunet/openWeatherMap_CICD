import { render, screen } from '@testing-library/react';
import Title from './Title';
import toJson from 'enzyme-to-json';
import Enzyme, { shallow, mount } from 'enzyme';

describe('Render Title UI', () => {
  test('renders Title', () => {
    render(<Title />);
    const titleElement = screen.getByText(/Title/i);
    expect(titleElement).toBeInTheDocument();
  });
});

describe('Snapshot', () => {
  test('Should take a snapshot of Title component', () => {
    const container = shallow(<Title />);
    expect(toJson(container)).toMatchSnapshot();
  });
});
