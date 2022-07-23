export const getFlatAttributes = (attributes) => {
  if (!attributes || typeof attributes !== 'object') {
    return '';
  }

  return Object.entries(attributes).map(([key, value]) => {
    if (key == 'className') {
      return `class="${value}"`;
    }
    if (typeof value === 'object') {
      const flatValue = Object.entries(value).map(([subKey, subValue]) => `${subKey}: ${subValue}`).join('; ');
      return `${key}="${flatValue}"`;
    }
    return `${key}="${value}"`;
  }
  ).join(' ');
}

export const getVoidElementTemplate = (tagName, attributes) => {
  const flatAttributes = getFlatAttributes(attributes);
  return `<${tagName} ${flatAttributes} />`
};
