import './App.css';
import Main from "./main.js"
import Left from "./left.js"
import Right from "./right.js"
import Header from "./header.js";
import Details from "./details.js";
import Input from "./input.js"
import Button from "./button.js"




function App() {
  return (
      <Main>
        <Left />   
        <Right>
          <Header/>
          <Details>
            <Input/>
          </Details>
          <Button/>
        </Right>
      </Main>
  )
}

export default App;
