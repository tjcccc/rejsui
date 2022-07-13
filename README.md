# sjsx

SwiftUI-like JSX

(Developing)

## Install

```shell
npm i sjsx-ui
// or
yarn add sjsx-ui
```

## Usage

Import main function and components you need:

```jsx
import declare, { HStack, VStack, Div, H, P } from 'sjsx';
```

In React component, use `declare()` in the `return ()` to replace classic JSX:

```jsx
const App = () => {
  return (
    declare(
      // SJSX code

      // h1
      H(1, 'Title'),

      // div
      Div([
        Div('Hello, world'),
        Div({yourVariable})
      ])
    )
  );
}

```

### Div

`Div()` has 2 parameters, the first one is content of `<div>`, the second is the attributes of it.

```jsx
Div([
  Div('content')
  ], {
    className: 'article',
    style: { padding: '2px 8px' }
  })
```

it will be transferred to such a JSX code:

```jsx
<div className='article' style={{ padding: '2px 8px' }}>
  <div>content</div>
</div>
```

This it the common usage of other components.

### H

`H()` has 3 parameters, the first one to specify what `<h?>` is. For example, `H(1, ...)` means `<h1>`, the second is its content, the last one is its attributes.

```jsx
// <h1 style={{ color: '#0000ff' }}>This is h1</h1>
H(1, 'This is h1', { style: { color: '#0000ff' }),

// <h2>This is h2</h2>
H(2, 'This is h2')
```

### HStack, VStack

Like SwiftUI, these two component is used for layout.

HStack is for horizontal layout. VStack is for vertical layout.

```jsx
HStack([
  Div('A'),
  Div('B')
])
```

It will be transferred to such a JSX code:

```jsx
<div style={{ display:flex; flexDirection: row }}>
  <div>A</div>
  <div>B</div>
</div>
```
