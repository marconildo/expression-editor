import { Fragment } from "react";
import ExpressionEditor from "./components/ExpressionEditor/ExpressionEditor"
import "./App.css";

function App() {
  return (
    <Fragment>
      <ExpressionEditor externalParams={[
        {
          name: "CTY_REGISTRATION_ENTERPRISE_SCORE",
          dataType: "number",
          description: "City registration enterprise score"
        },
        {
          name: "PTSTATUSCHANGEDATE",
          dataType: "date",
          description: ""
        },
        {
          name: "PTSTATUSCHANGE",
        }
      ]} />
    </Fragment>
  );
}

export default App;
