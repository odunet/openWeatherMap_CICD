import { render, screen } from '@testing-library/react';
import Temperature from './Temperature';
import toJson from 'enzyme-to-json';
import Enzyme, { shallow, mount } from 'enzyme';
import { useContext } from 'react';

//React testing library
import { fireEvent, cleanup } from '@testing-library/react';
import { store } from '../../../store';

describe('Render Temperature UI', () => {
  test('renders Temperature', () => {
    render(<Temperature />);
    const temperatureElement = screen.getByText(/Temperature/i);
    expect(temperatureElement).toBeInTheDocument();
  });
});

describe('Snapshot', () => {
  test('Should take a snapshot of Temperature component', () => {
    const container = shallow(<Temperature />);
    expect(toJson(container)).toMatchSnapshot();
  });
});

jest.mock('../../../helper/handleCheck.js', () => {
  return {
    handleCheck: (...args) => {
      return;
    },
  };
});

describe('Check checkbox change', () => {
  test('Checkbox is working', () => {
    render(<Temperature />);

    // Click button
    fireEvent.click(screen.getByTestId('fahrenhiet'));
    expect(screen.getByTestId('fahrenhiet').value).toEqual('F');
  });
});
