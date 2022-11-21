import { useState } from 'react'
import './App.css'
import { CakeView } from "./features/cake/CakeView";
import { IceCreamView } from "./features/iceCream/IceCreamView";
import { UserView } from "./features/user/UserView";

function App() {

  return (
    <div className="App">
      <CakeView />
      <IceCreamView />
      <UserView />
    </div>
  )
}

export default App
