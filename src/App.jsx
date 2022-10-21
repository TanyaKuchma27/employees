import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store,  persistor } from './redux/store';
import { Page } from 'components/Page';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Page />
      </PersistGate>
    </Provider>  
  );
};
