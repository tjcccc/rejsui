import Div from './syntaxes/div.js';
import parse from 'html-react-parser';

const sjsx = (...args) => {
  return parse(args.map(element => element).join(''));
};

export default sjsx;

export {
  Div
}


