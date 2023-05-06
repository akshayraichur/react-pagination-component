import { useState } from "react";
import FEPagination from "./Components/PaginationOnFrontend";
import BEPagination from "./Components/PaginatinOnBackend";

const App = () => {
  const [feAppraoch, setFEApproach] = useState(true);
  return (
    <div>
      <button onClick={() => setFEApproach((p) => !p)}>Click here to toggle between approaches</button>
      {feAppraoch ? <FEPagination /> : <BEPagination />}
    </div>
  );
};
export default App;
