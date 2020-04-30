import React from "react";
import PropTypes from "prop-types";
const Stateless = (props) => {
  const { name, content, hashTag } = props;
  return (
    <div>
      {" "}
      {name} {content} {hashTag}
    </div>
  );
};

Stateless.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  hashTag: PropTypes.string.isRequired,
};
export default Stateless;
