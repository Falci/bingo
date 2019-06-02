import React from "react";
import { Trans } from "react-i18next";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export const Confirm = ({ cancel, confirm }) => (
  <Modal isOpen toggle={cancel}>
    <ModalHeader toggle={cancel}>
      <Trans i18nKey="confirm.title" />
    </ModalHeader>
    <ModalBody>
      <Trans i18nKey="confirm.body" />
    </ModalBody>
    <ModalFooter>
      <Button color="link" onClick={cancel}>
        <Trans i18nKey="cta.cancel" />
      </Button>{" "}
      <Button color="danger" onClick={confirm}>
        <Trans i18nKey="cta.confirm" />
      </Button>
    </ModalFooter>
  </Modal>
);
