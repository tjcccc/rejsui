const VStack = ([...children]) => {
  return `<div style=\"display: flex, flex-direction: column\">${children.map(child => {
    return typeof child === 'object' ? Object.values(child)[0] : child;
  }).join('')}</div>`
};

export default VStack;
