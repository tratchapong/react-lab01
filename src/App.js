import {Button} from './allStyled'
import { MyButton } from './myStyled';
import OldButton from './OldButton';
function App() {
  return <div className="App">
    <Button>OK</Button>
    <Button primary>Restoration</Button>
    <Button secondary>Codecamp</Button>
    <Button third>The Third</Button>
    <hr />
    <OldButton primary onClick = {()=>alert(555)}>First</OldButton>
    <OldButton secondary>Second</OldButton>
    <OldButton>Default</OldButton>
    <hr />
    <MyButton>MyButton</MyButton>
    <MyButton primary onClick={()=>alert(555)}>MyButton-P</MyButton>
  </div>;
}

export default App;
