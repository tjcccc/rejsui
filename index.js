import sjsx, { Div } from './sjsx.js';

// Test
const test = sjsx(
  Div('Greeting'),
  Div(
    Div('hello'),
    Div('world')
  )
);

console.log(test);
