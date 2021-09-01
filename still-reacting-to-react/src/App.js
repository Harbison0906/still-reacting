import React, {useState} from 'react';
import Greeter from './components/Greeter';


const App = () => {

const [username, setUsername] = useState('')

  return (
<>
    <h1 className="text-center">Greetings!</h1>
    <Greeter name="Seth" phrase="Yo"/>
    <Greeter name="Katelyn" phrase="Hey there"/>
    <Greeter name="Ben" phrase="Good to see you"/>

    <span className="mr-1">Username</span><input value={username} onChange={(e => setUsername(e.target.value))}/>
</>
  )
}

export default App;