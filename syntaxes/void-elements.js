import { getVoidElementTemplate } from './utilities';

// https://www.w3.org/TR/2011/WD-html-markup-20110113/syntax.html#syntax-elements

export const Area = ({...attributes}) => getVoidElementTemplate('area', attributes);
export const Base = ({...attributes}) => getVoidElementTemplate('base', attributes);
export const Br = ({...attributes}) => getVoidElementTemplate('br', attributes);
export const Col = ({...attributes}) => getVoidElementTemplate('col', attributes);
export const Command = ({...attributes}) => getVoidElementTemplate('command', attributes);
export const Embed = ({...attributes}) => getVoidElementTemplate('embed', attributes);
export const Hr = ({...attributes}) => getVoidElementTemplate('hr', attributes);
export const Img = ({...attributes}) => getVoidElementTemplate('img', attributes);
export const Input = ({...attributes}) => getVoidElementTemplate('input', attributes);
export const Keygen = ({...attributes}) => getVoidElementTemplate('keygen', attributes);
export const Link = ({...attributes}) => getVoidElementTemplate('link', attributes);
export const Meta = ({...attributes}) => getVoidElementTemplate('meta', attributes);
export const Param = ({...attributes}) => getVoidElementTemplate('param', attributes);
export const Source = ({...attributes}) => getVoidElementTemplate('source', attributes);
export const Track = ({...attributes}) => getVoidElementTemplate('track', attributes);
export const Wbr = ({...attributes}) => getVoidElementTemplate('wbr', attributes);
