import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router";

import "./MiniCardAdd.scss";

export const MiniCardAdd = ({ history }) => {
  const navigate = () => {
    history.push("/add");
  };

  return (
    <div className="mini-card-add" onClick={navigate}>
      <i className="fas fa-plus" />
      <FontAwesomeIcon icon={faPlus} />
    </div>
  );
};

MiniCardAdd.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(MiniCardAdd);
