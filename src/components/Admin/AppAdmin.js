import React from 'react';
import './App.css';
import { ListProvider } from './components/context/ListContext';
import { FormProductProvider } from './components/context/FormProductContex';
import {AppUI} from './components/AppUI';

function App() {
  return (
    <ListProvider>
      <FormProductProvider>
        <AppUI />
      </FormProductProvider>
    </ListProvider>
  );
}

export default App;
