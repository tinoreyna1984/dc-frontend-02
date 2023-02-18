import { Input } from "./components/Input";

function App() {
  return (
    <div className="main">
      <h1>Inputs</h1>
      <div className="field-container">
        <div className="style">
          <p>{"<Input />"}</p>
          <Input />
        </div>
        <div className="style">
          <p>{"<Input disabled />"}</p>
          <Input disabled />
        </div>
        <div className="style">
          <p>{"<Input multiline rows=”4” />"}</p>
          <Input multiline rows={4} />
          <div className="style">
            <p>{"<Input error />"}</p>
            <Input error />
          </div>
          <div className="style">
            <p>{"<Input helperText=”Some interesting text” />"}</p>
            <Input helper="Some interesting text" />
          </div>
          <div className="style">
            <p>{"<Input helperText=”Some interesting text” />"}</p>
            <Input error helper="Some interesting text" />
          </div>
          <div className="style">
            <p>{"<Input fullWidth />"}</p>
            <Input fullWidth />
          </div>
          <div className="style">
            <p>{`<Input text="Text" />`}</p>
            <Input text="Text" />
          </div>
          <div className="style">
            <p>{`<Input size="sm" /> (md is default)`}</p>
            <Input size="sm" />
          </div>
          <div className="style">
            <p>{`<Input startIcon />`}</p>
            <Input startIcon />
          </div>
          <div className="style">
            <p>{`<Input endIcon />`}</p>
            <Input endIcon />
          </div>
        </div>
      </div>
      <h2>created by <b><u>tinoreyna1984</u></b> - devChallenges.io</h2>
    </div>
  );
}

export default App;
