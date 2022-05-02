import { GlobalConfig, LoadingIndicator } from "redux-simplified";
import React, { useState } from "react";

import FieldsetErros from "./ActionsFieldsets/FieldsetErros";
import FieldsetPaginatedCRUD from "./ActionsFieldsets/FieldsetPaginatedCRUD";
import FieldsetSimpleCRUD from "./ActionsFieldsets/FieldsetSimpleCRUD";
import ReactJson from "react-json-view";
import { useAppSelector } from "./store";

const App = () => {
  const store = useAppSelector((state) => {
    return state;
  });
  const [response, setResponse] = useState({});

  GlobalConfig.setConfig({});

  return (
    <div className="App grid-wrap">
      <LoadingIndicator fetching={store.fetching} />
      <FieldsetSimpleCRUD setResponse={setResponse} />
      <FieldsetPaginatedCRUD setResponse={setResponse} />
      <FieldsetErros setResponse={setResponse} />
      <fieldset style={{ gridArea: "store" }}>
        <legend>Store</legend>
        <ReactJson name="state" src={store} />
      </fieldset>
      <fieldset style={{ gridArea: "response" }}>
        <legend>Last response</legend>
        <ReactJson name="response" src={response ? response : {}} />
      </fieldset>
    </div>
  );
};

export default App;
