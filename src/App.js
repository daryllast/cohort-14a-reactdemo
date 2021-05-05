import logo from './logo.svg';
import './App.css';
import Button from "./button";
import React, {useState, useEffect} from 'react';
// hooks

function App() {

  const [counter, setCounter] = useState(0);
  const [firstName, setFirstName] = useState('');

  // let counter = 0;

  useEffect(() => {
    // if(firstName == 'John'){
    //   alert('The name is John');
    // }
    console.log('this will run when firstName state changes')
  }, [firstName])

  useEffect(() => {
    console.log('run this only once on component load/mount')
    // fetch list of users on page load
    // fetch calls of any sort
  }, [])

  useEffect(() => {
    console.log('this will run everytime any state variable changes or page loads')
  })

  useEffect(() => {
    if(firstName == 'John' && counter == 5){
      alert('YAY');
    }
  }, [firstName, counter])

  const countUp = async () => {
    console.log('the button was clicked')
    // counter = counter + 1
    let newCounterValue = counter + 1;
    setCounter(newCounterValue);
    // document.getElementById('result').text(counter)

  };

  // if counter gets to 5, show a message we are at 5

  const onInputChange = async (ev) => {
    console.log('the input was changed')
    console.log(ev.currentTarget.value);
    setFirstName(ev.currentTarget.value);

  };

  return (
    <div className="App">

      <h1>this is my name</h1>

      {/*ternary operator*/}
      {/*logical operator*/}

      <br/>
      <br/>

      <input value={firstName} onChange={onInputChange} type="text" className={'border'} placeholder={'Enter your first name'}/>

      <p className={firstName=='John' ? 'text-red-500' : 'text-blue-500' }>the current value of the state variable firstName is: {firstName}</p>

      {firstName=='Jane' && <h1>It's Jane!</h1>}

      &nbsp;&nbsp;<button>Submit</button>

      <br/>
      <br/>
      <br/>

      <p className={counter==5 ? 'text-red-500' : 'text-blue-500'}>The current value of click counter: {counter}</p>

      <br/>

      {/*{counter == 5 && <Button />}*/}

      <button className={'bg-blue-500 text-white rounded pl-3 pr-3 pt-4 pb-4'} onClick={countUp}>Click me</button>


      <br/>
      <br/>
      {counter==5 && <h1 className={'text-2xl'}>We are at 5!</h1>}



      {/*<br/>*/}
      {/*<br/>*/}
      {/*<br/>*/}
      {/*<br/>*/}
      {/*<br/>*/}

      {/*<Button />*/}




      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*    <h1>This is nice!</h1>*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
    </div>
  )
}

export default App
