// packages
import React from "react";
import { NativeRouter } from 'react-router-native';
import { Provider as ReduxProvider } from 'react-redux';

// scripts
import Main from "./core/main";
import { store } from './core';


export default function App() {
  return (
    <ReduxProvider store={store}>    
      <NativeRouter >
        <Main />
      </NativeRouter>
    </ReduxProvider>
  );
}

