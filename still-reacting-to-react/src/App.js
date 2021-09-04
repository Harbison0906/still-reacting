import React, { useState, useEffect } from 'react';
import Greeter from './components/Greeter';


const App = () => {

  const [username, setUsername] = useState('')
  const [loaded, setLoaded] = useState(false)

  const handleToggle = () => {
    setLoaded(!loaded);
  }

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 3000)
  }, [loaded]);

  if (loaded === false) {

    return (
      <>
        <h1 className="m-3 text-center">Website loading...</h1>
        <button className="btn btn-primary mx-auto d-block shadow" onClick={handleToggle}>Toggle State</button>
      </>
    )

  }
  return (
    <>
      <h1 className="text-center">Greetings!</h1>

      <Greeter name="Seth" phrase="Yo" />
      <Greeter name="Katelyn" phrase="Hey there" />
      <Greeter name="Ben" phrase="Good to see you" />
      <div className="text-center">
        <span className="mr-1">Username</span><input value={username} onChange={(e => setUsername(e.target.value))} />
        <p>You are logging in as: {username}</p>
      </div>
    </>
  )
}

export default App;