import Header from "./Components/Header";
import InputTaker from "./Components/InputTaker";
import Preview from "./Components/Preview";
import Footer from "./Components/Footer";
import logo from "./logo.svg";
import "./style.css";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="row">
        <h1 className="text-center">Markdown Prewiew</h1>
      </div>
      <div className="row justify-content-center">
        <InputTaker />
        <Preview />
      </div>
      <Footer />
    </div>
  );
}

export default App;
