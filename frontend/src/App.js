import "./App.css";

import Banner from "./Components/Banner";
import Featured from "./Components/Featured";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="w-4/5 mx-auto">
      <Header />
      <Sidebar />
      <Banner />
      <Featured />
    </div>
  );
}

export default App;
