import React from "react";
import { connect } from "react-redux";
import { useTranslation, Trans } from "react-i18next";
import { withRouter } from "react-router";
import { Button, Row, Col } from "reactstrap";
import { removeCardGame } from "../redux/game/actions";
import { Page } from "./Page";
import { Card } from "../components/Card";
import { Confirm } from "../components/Confirm";

import "./View.scss";

export const View = ({ card, chosen, history, removeCard }) => {
  const [showModal, setShowModal] = React.useState(false);
  const toggleModal = () => setShowModal(!showModal);
  const { t } = useTranslation();

  const remove = () => {
    toggleModal();
    removeCard(card);
    history.push("/");
  };

  return (
    <Page className="View pb-2 pt-2" title={`${t("card")}: ${card.id}`}>
      {showModal && <Confirm cancel={toggleModal} confirm={remove} />}
      <Card {...card} chosen={chosen} />
      <Row>
        <Col>
          <Button
            type="button"
            color="primary"
            block
            onClick={() => history.push("/")}
          >
            <Trans i18nKey="cta.back" />
          </Button>
        </Col>
        <Col>
          <Button
            type="button"
            color="danger"
            block
            onClick={() => setShowModal(true)}
          >
            <Trans i18nKey="cta.remove" />
          </Button>
        </Col>
      </Row>
    </Page>
  );
};

const mapStateToProps = ({ game }, { match }) => ({
  card: game.cards.find(card => card.id === match.params.id),
  chosen: game.chosen
});
const mapDispatchToProps = { removeCard: removeCardGame };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(View));
