import "./App.css";
import { Editor } from "./compoent/EditorApp/editor";
import Store from "./compoent/Store/Context";
type HeaderProps = {
  alignment: string;
};

function App() {
  return (
    <div className="App">
      <Store>
        <Editor />
      </Store>
    </div>
  );
}

export default App;
