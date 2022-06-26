import logo from "./logo.svg";
import "./style.css";

function App() {
  return (
    <div className="container">
      <div className="row justify-content-end pt-1">
        <button className="Ask">?</button>
      </div>
      <div className="row">
        <h1 className="text-center">Markdown Prewiew</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-5 holder p-0">
          <textarea id="textInput" defaultValue={" "} />
        </div>
        <div className="col-md-5 holder">
          <div className="text-panel-right" id="preview"></div>
        </div>
      </div>
      <div className="row mt-5">
        <p className="text-center">
          Hami Berkay Aktaş tarafından 2022 yılında yapılmıştır
        </p>
      </div>
    </div>
  );
}

export default App;
