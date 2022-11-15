import logo from "./logo.svg";
import "./App.css";
import { BasicTable } from "./components/BasicTable";
import { SortingTable } from "./components/SortingTable";
import { FilteringTable } from "./components/FiltertingTable";
import { PaginationTable } from "./components/PaginationTable";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      <FilteringTable />
      {/* <PaginationTable /> */}
    </div>
  );
}

export default App;
