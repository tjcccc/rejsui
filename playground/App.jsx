import React, { useEffect, useState } from 'react';
import declare, { HStack, VStack, Div, H, P } from '../index.js';

const App = () => {

  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    setGreeting('Hello, world!');
  }, [])

  return (
    <>
      {/* JSX */}
      <h1 style={{ color: '#ff0000' }}>Original JSX</h1>
      <div className='article' style={{ padding: '2px 8px', marginBottom: '24px' }}>
        <p>{greeting}</p>
        <p>Good bye.</p>
        <p>2022</p>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div>A</div>
          <div>B</div>
          <div>C</div>
        </div>
      </div>

      {/* SJSX */}
      {declare(
        H(1, 'SwiftUI-like JSX', { style: { color: '#0000ff' } }),
        Div([
          P({greeting}),
          P('Good bye.'),
          P(2022),
          HStack([
            Div('A'),
            Div('B'),
            Div('C')
          ])
        ], {
          className: 'article',
          style: { padding: '2px 8px' }
        })
      )}
    </>
  );
};

export default App;
