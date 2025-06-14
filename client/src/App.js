import { Route, Routes,Navigate } from "react-router-dom";
import VirtualZoo from "./Components/assets/virtualzoo.js"
const App = () => {
  return (
    <>
      <Routes>
           <Route path="/" element={<Navigate to="/animal/1749815004689" />} />
        <Route path="/animal/:animalId" element={<VirtualZoo />} />
      
      </Routes>
    </>
  );
}

export default App;

