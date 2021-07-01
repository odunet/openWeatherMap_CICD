import './App.css';
import { useEffect, useContext } from 'react';
import Control from './components/control';
import Display from './components/display';
import { Card, VerticalLine } from './App.stlyle';
import { loadData_Action } from './actions';
import { store } from './store';
import { getData } from './services/api/weatherMap';

function App() {
  //Bring in dispatcher
  const { dispatch } = useContext(store);

  useEffect(() => {
    const asyncFunction = async () => {
      let response = await getData();
      dispatch(loadData_Action(response));
    };

    asyncFunction();
  }, [dispatch]);

  return (
    <Card>
      <Control />
      <VerticalLine />
      <Display />
    </Card>
  );
}

export default App;
