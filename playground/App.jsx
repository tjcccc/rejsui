import React from 'react';
import sjsx, { Div } from '../sjsx.js';

const App = () => {
  return (
    <>
      <h1>SJSX</h1>
      {sjsx(
        Div('Greeting'),
        Div(
          Div('hello'),
          Div('world')
        )
      )}
    </>
  );
};

export default App;
