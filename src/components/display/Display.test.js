import Display from './Display';
import { shallow } from 'enzyme';

jest.mock('react', () => {
  const ActualReact = jest.requireActual('react');
  return {
    ...ActualReact,
    useContext: () => ({
      state: {
        title: 'Title of Widget',
        weather: {
          image: '',
          celsiusTemp: '',
          fahrenheitTemp: '',
          city: 'lagos',
          wind: '',
        },
        isCelsius: true,
        showWind: true,
        showCard: false,
      },
    }),
  };
});

test('renders Display', () => {
  const wrapper = shallow(<Display />);
  const h2 = wrapper.find('div');
  expect(h2.prop('id')).toBe('displayTest');
});
