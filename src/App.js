import './App.css';
import { useEffect, useContext } from 'react';
import Control from './components/control';
import Display from './components/display';
import { Card, VerticalLine } from './App.stlyle';
import { loadData_Action } from './actions';
import { store } from './store';
import getWeatherData from './services/api/openWeatherAPI';

function App() {
  //Bring in dispatcher
  const { dispatch } = useContext(store);

  useEffect(() => {
    const asyncLoadData = async () => {
      let response = await getWeatherData();
      dispatch(loadData_Action(response));
    };

    asyncLoadData();
  }, [dispatch]);

  return (
    <>
      <Card>
        <Control />
        <VerticalLine />
        <Display />
      </Card>
    </>
  );
}

export default App;
