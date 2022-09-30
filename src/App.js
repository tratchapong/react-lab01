import { useEffect, useState } from "react";
import MsgBox from "./MsgBox";  
import MyModal from "./MyModal";

function App() {
  const [darkmode, setDarkmode] = useState(false)
  useEffect(() => {  
    if (darkmode) 
      document.documentElement.classList.add('dark')
    else
      document.documentElement.classList.remove('dark')
  }, [darkmode])
  
  return (
    <div className="App">
      <MyModal />
    </div>
  );
}

export default App;
