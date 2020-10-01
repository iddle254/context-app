import React from 'react';
import Navbar from './Navbar';
import Form from './Form';
import PageContent from './PageContent';
import {ThemeContext} from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <ThemeContext>
      <LanguageProvider>
    <PageContent>
      <Navbar/>
      <Form/>
      </PageContent>
      </LanguageProvider>
      </ThemeContext>
  );
}

export default App;
