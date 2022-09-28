import { useEffect, useState } from "react";
import MsgBox from "./MsgBox";

function App() {
  const [darkmode, setDarkmode] = useState(false)
  useEffect(() => {  
    if (darkmode) 
      document.documentElement.classList.add('dark')
    else
      document.documentElement.classList.remove('dark')
  }, [darkmode])
  
  return (
    <div className="App w-full h-screen p-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      <button onClick={()=>setDarkmode(prv=> !prv)} className="mybtn">switch to {darkmode ? 'light' : 'dark'}</button>
      <h1 className="text-3xl font-bold underline my-3">Hello world!</h1>
      <MsgBox />
    </div>
  );
}

export default App;
