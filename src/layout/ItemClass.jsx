import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const StyledItem = styled.div`
  flex: ${(props) => props.flex};
  text-align: ${(props) => props.align};
  padding: ${(props) => props.padding};
`;

class Item extends React.Component {
  render() {
    const { children, flex, align, padding } = this.props;
    return (
      <StyledItem flex={flex} align={align} padding={padding}>
        {children}
      </StyledItem>
    );
  }

  static defaultProps = {
    align: "left",
    padding: "unset"
  };

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf([PropTypes.node]),
      PropTypes.node
    ]),
    flex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    align: PropTypes.oneOf(["left", "right", "center", "justify"]),
    padding: PropTypes.string
  };
}

export default Item;
