const Div = (...args) => {
  const children = args;
  return `<div>${children.map(child => child).join('')}</div>`
};

export default Div;
