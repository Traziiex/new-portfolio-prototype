import Navbar from './components/navbar/Navbar';
import {Switch, Route} from 'react-router-dom';
import {useState} from 'react';

import Presentation from './components/presentation/Presentation';
import Parcours from './components/parcours/Parcours';

function App() {

  const [unlocked, setUnlocked] = useState(false);

  const unlockPages = () => {
    setUnlocked(!unlocked);
    console.log('hey');
  }

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Presentation unlocked={unlocked} unlockPages={unlockPages}/>
        </Route>
        <Route path="/mon-parcours" exact>
          <Parcours unlocked={unlocked} unlockPages={unlockPages}/>
        </Route>
      </Switch>
    </>
);
}

export default App;
