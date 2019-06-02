import React from "react";
import { useTranslation } from "react-i18next";
import ListCards from "../components/ListCards";
import { Page } from "./Page";
import Panel from "../components/Panel";

import "./Home.scss";

export const Home = ({ chosen, toggleNumber }) => {
  const { t } = useTranslation();

  return (
    <Page title={t("home.title")}>
      <div className="Home">
        <ListCards />
        <Panel />
      </div>
    </Page>
  );
};
