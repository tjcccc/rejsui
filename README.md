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
import declare, { HStack, VStack, Div, H, P } from 'sjsx-ui';
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

### Void Elements

All [void elements (self-closing tags)](https://www.w3.org/TR/2011/WD-html-markup-20110113/syntax.html#syntax-elements) can be invoked by a function with the same capitalized name. The attributes of a tag should be set as an object as related function's arguments.

```jsx
// <img src="example.jpg" title="Example" alt="image" />
Img({
  src: 'example.jpg',
  title: 'Example',
  alt: 'image'
})
```

### Common Elements

[All common elements](https://www.w3.org/TR/2011/WD-html-markup-20110113/elements.html)

(TODO)

### Div

`Div()` has two parameters. The first is the content of `<div>`, and the other is its attributes.

```jsx
Div([
  Div('content')
  ], {
    className: 'article',
    style: { padding: '2px 8px' }
  })
```

it will be parsed to such a JSX code:

```jsx
<div className='article' style={{ padding: '2px 8px' }}>
  <div>content</div>
</div>
```

This is the common usage of other components.

### H

`H()` has three parameters. The first is to specify what `<h?>` is. For example, `H(1, ...)` means `<h1>`. The second is its content. The last is its attributes.

```jsx
// <h1 style={{ color: '#0000ff' }}>This is h1</h1>
H(1, 'This is h1', { style: { color: '#0000ff' }),

// <h2>This is h2</h2>
H(2, 'This is h2')
```

### HStack, VStack

Like SwiftUI, these two components are used for layout.

HStack is for horizontal layout. VStack is for vertical layout.

```jsx
HStack([
  Div('A'),
  Div('B')
])
```

It will be parsed to such a JSX code:

```jsx
<div style={{ display:flex; flexDirection: row }}>
  <div>A</div>
  <div>B</div>
</div>
```
