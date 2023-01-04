import 
       {BrowserRouter, 
        Routes,
        Route} from "react-router-dom";

import Home from "./pages/home/Home";
import List from "./pages/list/List";

function App() {
  return (
    <div>
         <BrowserRouter>
             <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/hotels" element={<List/>}/>
             </Routes>
         </BrowserRouter> 
          
    </div>
  );
}

export default App;
