import { getFlatAttributes } from "./utilities"

const Text = (content, attributes) => {
  const flatAttributes = getFlatAttributes(attributes);
  return `<span ${flatAttributes}>${content}</span>`
}



export default Text;
