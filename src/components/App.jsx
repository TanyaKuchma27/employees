import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { Employees } from './Employees';

export const App = () => {
  return (
    <Provider store={store}>
      <Employees/>
    </Provider>  
  );
};
