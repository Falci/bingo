import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { useTranslation, Trans } from "react-i18next";
import { Alert, Button, Row, Col, FormGroup, Label, Input } from "reactstrap";
import { Card } from "../components/Card";
import { Panel } from "../components/Panel";
import { addCard } from "../redux/game/actions";
import { Page } from "./Page";

import "./Add.scss";

export const Add = ({ history, addCard }) => {
  const [id, setId] = React.useState("");
  const [error, setError] = React.useState(false);
  const [hasFree, setFree] = React.useState(false);
  const [chosen, setChosen] = React.useState([]);
  const { t } = useTranslation();

  const onSelect = n => {
    if (chosen.indexOf(n) > -1) {
      return setChosen(chosen.filter(c => c !== n));
    }

    setChosen(chosen.concat(n).slice(-25));
    setError(false);
  };

  const onSave = () => {
    setError(false);
    if (!hasFree && chosen.length !== 25) {
      return setError(t("add.error.not25"));
    }

    if (hasFree && chosen.length !== 24) {
      return setError(t("add.error.not24"));
    }

    if (!id) {
      return setError(t("add.error.name"));
    }

    addCard({ id, numbers: chosen, hasFree });
    history.push("/");
  };

  return (
    <Page className="Add pb-2 pt-2" title={t("add.title")}>
      <div className="wrapper">
        {error && (
          <Alert className="mb-2" color="danger">
            {error}
          </Alert>
        )}
        <Row>
          <Col>
            <FormGroup>
              <Label for="id">
                <Trans i18nKey="add.name" />:
              </Label>
              <Input id="id" vlaue={id} onChange={e => setId(e.target.value)} />
            </FormGroup>
          </Col>
          <Col>
            <h6>
              <Trans i18nKey="add.options" />
            </h6>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  id="free"
                  checked={hasFree}
                  onChange={() => setFree(!hasFree)}
                />{" "}
                <Trans i18nKey="add.free" />
              </Label>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card numbers={chosen} free={hasFree} chosen={[]} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Panel chosen={chosen} onSelect={onSelect} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button type="button" color="success" block onClick={onSave}>
              <Trans i18nKey="cta.save" />
            </Button>
          </Col>
          <Col>
            <Button
              type="button"
              color="warning"
              block
              onClick={() => history.push("/")}
            >
              <Trans i18nKey="cta.cancel" />
            </Button>
          </Col>
        </Row>
      </div>
    </Page>
  );
};

const mapDispatchToProps = {
  addCard
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Add));
