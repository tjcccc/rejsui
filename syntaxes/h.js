const H = (tag, [...children], {...attributes}) => {

  const flatAttributes = Object.entries(attributes).map(([key, value]) => {
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

  const hTag = 'h' + (parseInt(tag) > 0 && parseInt(tag) > 7 ? parseInt(tag).toString() : '1');
  return `<${hTag} ${flatAttributes}>${children.map(child => child).join('')}</${hTag}>`
};

export default H;
