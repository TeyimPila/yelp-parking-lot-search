import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./modules/yelpSearch/containers/HomePage";
import Header from "./shared/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path={'/'} element={<HomePage/>}/>
        {/* TODO: Add 404 page */}
      </Routes>
    </div>
  );
}

export default App;
