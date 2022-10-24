import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { store,  persistor } from './redux/store';
import { Page } from 'page/Page';
import { LOCALES } from 'i18n/locales'
import { messages } from 'i18n/messages'

export const App = () => { 
  const [currentLocale, setCurrentLocale] = useState(getInitialLocal());

  const handleChange = (event) => {
    setCurrentLocale(event.target.value);
    localStorage.setItem("locale", event.target.value);
  };

  function getInitialLocal() {
    const savedLocale = localStorage.getItem("locale");
    return savedLocale || LOCALES.ENGLISH;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <IntlProvider messages={messages[currentLocale]} locale={currentLocale} defaultLocale={LOCALES.ENGLISH}>
          <Page currentLocale={currentLocale} handleChange={handleChange}/>
        </IntlProvider>
      </PersistGate>
    </Provider>  
  );
};
