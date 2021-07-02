import { render, screen } from '@testing-library/react';
import Display from './Display';
import { store, StateProvider } from '../../store';
import { useContext } from 'react';
import { mount } from 'enzyme';

test('renders Display', () => {
  const TestComponent = () => {
    const { state } = useContext(store);

    return <div test_id='value'>{state.title}</div>;
  };

  const wrapper = mount(
    <StateProvider>
      <TestComponent />
    </StateProvider>
  );

  expect(wrapper.find('[test_id="value"]').text()).toEqual('Title of Widget');
});
