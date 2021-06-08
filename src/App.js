import Navbar from './components/navbar/Navbar';
import {Switch, Route, useLocation} from 'react-router-dom';
import {useState} from 'react';
import {AnimatePresence} from 'framer-motion';

import Presentation from './components/presentation/Presentation';
import Parcours from './components/parcours/Parcours';
import Plus from './components/presentation/Plus'
import CreationsContainer from './components/creations/CreationsContainer';

function App() {

  const [unlocked, setUnlocked] = useState(false);
  const loc = useLocation();

  const unlockPages = () => {
    setUnlocked(!unlocked);
    console.log('hey');
  }

  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={loc} key={loc.pathname}>
          <Route path="/" exact>
            <Presentation unlocked={unlocked} unlockPages={unlockPages}/>
          </Route>
          <Route path="/presentation" exact>
            <Plus unlocked={unlocked} unlockPages={unlockPages}/>
          </Route>
          <Route path="/mon-parcours" exact>
            <Parcours unlocked={unlocked} unlockPages={unlockPages}/>
          </Route>
          <Route path="/mes-creations" exact>
            <CreationsContainer unlocked={unlocked} unlockPages={unlockPages}/>
          </Route>
        </Switch>
      </AnimatePresence>
    </>
);
}

export default App;
