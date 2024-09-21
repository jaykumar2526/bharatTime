import "bootstrap/dist/css/bootstrap.min.css"
import CurrrTime from "./CurrTime";
import "./App.css"

function App() {
  return(
  <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden hero">
    <div className="my-3 p-3">
      <h2 className="display-5">Bharat Times</h2>
      <p className="lead fw-bold">This is the clock that shows the time in harat at all times.</p>
    </div>
    <div className="bg-dark shadow-sm mx-auto main-div" style={{width:" 80%", height: "300px", borderRadius: "21px 21px 0 0"}}>
      <CurrrTime></CurrrTime>
    </div>
  </div >
);
}

export default App;


