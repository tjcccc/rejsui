# sjsx-ui

SwiftUI-like JSX

(Developing)

## Install

```shell
npm i sjsx-ui
# or
yarn add sjsx-ui
```

## Usage

Import main function and components you need:

```jsx
import View, { HStack, VStack, Heading, Div, P } from 'sjsx-ui';
```

In React component, use `View()` for the `return` to replace classic JSX:

```jsx
const [content, setContent] = useState('Yes!');

const App = () => {
  return View(
    // SJSX code

    // h1
    Heading(1, 'Title'),

    // div
    Div([
      Div('Hello, world'),
      Div(content)
    ])
  );
}

```

### Void Elements

All [void elements (self-closing tags)](https://www.w3.org/TR/2011/WD-html-markup-20110113/syntax.html#syntax-elements) can be invoked by a function with the same capitalized name.

The attributes of a tag should be set as an object as related function's arguments.

```jsx
// <img src="example.jpg" title="Example" alt="image" />
Img({
  src: 'example.jpg',
  title: 'Example',
  alt: 'image'
})
```

### Common Elements

All [common elements](https://www.w3.org/TR/2011/WD-html-markup-20110113/elements.html) can be invoked by a function with the same capitalized name.

There need two arguments. The first one is an array of its content. The second one is the attributes object.

```jsx
// <div className='article' style={{padding: '2px 8px'}}>
//   <h1>Title</h1>
//   <p>Content.</p>
// </div>

Div([
  H1(['Title']), // or H1('Title')
  P(['Content'])
], {
  className: 'article',
  style: { padding: '2px 8px' }
})
```

### Custom Elements

#### HStack, VStack

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
<div style={{ display: 'flex'; flexDirection: 'row' }}>
  <div>A</div>
  <div>B</div>
</div>
```

#### Heading

`Heading()` has three parameters. The first is to specify what `<h?>` is. For example, `Heading(1, ...)` means `<h1>`. The second is its single string content. The last is its attributes.

```jsx
// <h1 style={{ color: '#0000ff' }}>This is h1</h1>
Heading(1, 'This is h1', { style: { color: '#0000ff' }),

// <h2>This is h2</h2>
Heading(2, 'This is h2')
```

#### Text

`Text()` will display a string text with `<span></span>` tag. You can set attributes as its second argument.

```jsx
// <span style={{ color: '#ff0000' }}>Red Text</span>

Text('Red Text', { style: { color: '#ff0000' } })
```

#### Spacer

`Spacer()` will expand to fill the rest space in a flexbox container.

```jsx
HStack([
  Div(),
  Div(),
  Spacer(),
  Div()
]);
```
