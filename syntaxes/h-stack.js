const HStack = ([...children]) => {
  return `<div style="display:flex;flexDirection:row">${children.map(child => {
    return typeof child === 'object' ? Object.values(child)[0] : child;
  }).join('')}</div>`
};

export default HStack;
