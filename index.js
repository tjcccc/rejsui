import parse from 'html-react-parser';
import { Area, Base, Br, Col, Command, Embed, Hr, Img, Input, Keygen, Link, Meta, Param, Source, Track, Wbr } from './syntaxes/void-elements';
import { A, Abbr, Address, Article, Aside, Audio, B, Bdi, Bdo, Blockquote, Body, Button, Canvas, Caption, Cite, Code, Colgroup, Datalist, Dd, Del, Details, Dfn, Div, Dl, Dt, Em, Fieldset, Figcaption, Figure, Footer, Form, H1, H2, H3, H4, H5, H6, Head, Header, Hgroup, Html, I, Iframe, Ins, Kbd, Label, Legend, Li, Map, Mark, Menu, Meter, Nav, Noscript, Object, Ol, Optgroup, Option, Output, P, Pre, Progress, Q, Rp, Rt, Ruby, S, Samp, Script, Section, Select, Small, Span, Strong, Style, Sub, Summary, Sup, Table, Tbody, Td, Textarea, Tfoot, Th, Thead, Time, Title, Tr, Ul, Var, Video } from './syntaxes/common-elements';
import HStack from './syntaxes/h-stack';
import VStack from './syntaxes/v-stack';
import Heading from './syntaxes/heading';

const View = (...args) => {
  return parse(args.map(element => element).join(''));
};

export default View;

export {
  Area, Base, Br, Col, Command, Embed, Hr, Img, Input, Keygen, Link, Meta, Param, Source, Track, Wbr,
  A, Abbr, Address, Article, Aside, Audio, B, Bdi, Bdo, Blockquote, Body, Button, Canvas, Caption, Cite, Code, Colgroup, Datalist, Dd, Del, Details, Dfn, Div, Dl, Dt, Em, Fieldset, Figcaption, Figure, Footer, Form, H1, H2, H3, H4, H5, H6, Head, Header, Hgroup, Html, I, Iframe, Ins, Kbd, Label, Legend, Li, Map, Mark, Menu, Meter, Nav, Noscript, Object, Ol, Optgroup, Option, Output, P, Pre, Progress, Q, Rp, Rt, Ruby, S, Samp, Script, Section, Select, Small, Span, Strong, Style, Sub, Summary, Sup, Table, Tbody, Td, Textarea, Tfoot, Th, Thead, Time, Title, Tr, Ul, Var, Video,
  HStack,
  VStack,
  Heading
}
