import React, { useEffect, useState } from 'react';
import View, { HStack, VStack, Heading, Div, P, Area, Hr, Input, Br, Img } from '../index.js';

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
      {View(
        Heading(1, ['SwiftUI-like JSX'], { style: { color: '#0000ff' } }),
        Div([
          P([{greeting}]),
          P(['Good bye.']),
          P([2022]),
          HStack([
            Div(['A']),
            Div(['B']),
            Div(['C'])
          ]),
          Area({ id: 'area' }),
          Hr({ id: 'line' }),
          Input({ type: 'button', value: 'Button', disabled: true }),
          Br(),
          Img({ src: 'https://picsum.photos/200/300', title: 'random' })
        ], {
          className: 'article',
          style: { padding: '2px 8px' }
        })
      )}
    </>
  );
};

export default App;
