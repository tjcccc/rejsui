const P = (...args) => {
  const children = args;
  return `<p>${children.map(child => {
    return typeof child === 'object' ? Object.values(child)[0] : child;
  }).join('')}</p>`
};

export default P;
