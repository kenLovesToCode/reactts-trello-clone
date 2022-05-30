import { FC } from "react";
import { Column } from "./components/fc/Column";
import { Card } from "./components/fc/Card";
import { AddNewItem } from "./components/fc/AddNewItem";
import { AppContainer } from "./styles";

export const App: FC = ({ children }) => {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate app scaffold" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn Tpyescript" />
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typing" />
      </Column>
      <AddNewItem toggleButtonText="+ Add nother list" onAdd={console.log} />
    </AppContainer>
  );
};
