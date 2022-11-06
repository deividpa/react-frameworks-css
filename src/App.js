import "./App.css";

// Librerías locales

import Bootstrap from "./Components/Bootstrap";
import PersistentDrawerLeft from "./Components/Drawer";
import MaterialUI from "./Components/MaterialCard";

function App() {
  return (
    <div className="App">
      <h1>Framework CSS con React</h1>
      <Bootstrap />
      <hr />
      <MaterialUI />
      <hr />
      <PersistentDrawerLeft />
    </div>
  );
}

export default App;
