import Pagination from "./Pagination";
import Search from "./Search";
import Stories from "./Stories";
//import { useContext } from "react";
//import { AppContext } from "./context"; 
import { useGlobalContext } from "./context";

  function App() {
    const data = useGlobalContext();
  return (
    <>
    <div className="App">
        Welcome to Dipesh News Website {data}
     </div>
      <Pagination />
      <Search />
      <Stories />

    </>

  );
}

export default App;
