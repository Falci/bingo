import React from "react";
import { connect } from "react-redux";
import classname from "classnames";
import { Trans } from "react-i18next";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUndoAlt,
  faTrashAlt,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { resetNumbers, removeAllCards } from "../redux/game/actions";
import { Confirm } from "../components/Confirm";

import "./SideMenu.scss";

const ListItem = ({ action, color, children, disabled }) => {
  const [showModal, setShowModal] = React.useState(false);
  const confirm = () => {
    setShowModal(false);
    action();
  };

  const className = classname({
    [color]: !disabled,
    "text-muted": disabled
  });

  const onClick = () => {
    if (disabled) return;
    setShowModal(true);
  };

  return (
    <React.Fragment>
      {showModal && (
        <Confirm cancel={() => setShowModal(false)} confirm={confirm} />
      )}
      <ListGroupItem className={className} onClick={onClick}>
        {children}
      </ListGroupItem>
    </React.Fragment>
  );
};

export const SideMenu = ({
  show,
  onClose,
  hasCards,
  hasNumbers,
  resetNumbers,
  removeAllCards
}) => {
  const [active, setActive] = React.useState(false);

  const close = () => {
    setActive(false);
    setTimeout(onClose, 300);
  };

  React.useEffect(() => {
    if (show) {
      setTimeout(() => setActive(true), 10);
    }
  }, [show]);

  const className = classname({
    content: true,
    active
  });

  const reset = () => {
    resetNumbers();
    close();
  };

  const removeAll = () => {
    removeAllCards();
    close();
  };

  return (
    show && (
      <div className="sideMenu">
        <div className={className}>
          <ListGroup>
            <ListItem
              action={reset}
              color="text-warning"
              disabled={!hasNumbers}
            >
              <React.Fragment>
                <FontAwesomeIcon icon={faUndoAlt} className="mr-3" />
                <Trans i18nKey="sideMenu.reset" />
              </React.Fragment>
            </ListItem>
            <ListItem
              action={removeAll}
              color="text-danger"
              disabled={!hasCards}
            >
              <React.Fragment>
                <FontAwesomeIcon icon={faTrashAlt} className="mr-3" />
                <Trans i18nKey="sideMenu.removeAll" />
              </React.Fragment>
            </ListItem>
            <ListGroupItem onClick={close}>
              <FontAwesomeIcon icon={faTimes} className="mr-3" />
              <Trans i18nKey="sideMenu.close" />
            </ListGroupItem>
          </ListGroup>
        </div>
        <div className="drop" onClick={close} />
      </div>
    )
  );
};

const mapStateToProps = ({ game }) => ({
  hasCards: !!game.cards.length,
  hasNumbers: !!game.chosen.length
});

const mapDispatchToProps = {
  resetNumbers,
  removeAllCards
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);
