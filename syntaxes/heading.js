import { H1, H2, H3, H4, H5, H6 } from "./common-elements";
const Heading = (numberTag, children, attributes) => {
  switch (numberTag) {
    case 1:
      return H1(children, attributes);
    case 2:
      return H2(children, attributes);
    case 3:
      return H3(children, attributes);
    case 4:
      return H4(children, attributes);
    case 5:
      return H5(children, attributes);
    case 6:
      return H6(children, attributes);
    default:
      return H6(children, attributes);
  }
};

export default Heading;
