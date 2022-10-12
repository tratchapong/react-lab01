import { useState } from "react";
import { Button, FlexCenter, TitleSize, TitleTW } from "./allStyles";
import TwModal from "./TwModal";

function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className="App">
      <TitleTW>CodeCamp#12</TitleTW>
      <FlexCenter>
        <Button onClick={()=>setOpen(true)}>Open Modal</Button>
      </FlexCenter>
      <TwModal open={open} doClose={()=>setOpen(false)}>
        <TitleSize big>Codecamp</TitleSize>
        <TitleSize>#12</TitleSize>
        <TitleTW>in a Modal</TitleTW>
      </TwModal>
    </div>
  );
}

export default App;
