import Navbar from './components/navbar/Navbar';
import {Switch, Route} from 'react-router-dom';

import Presentation from './components/presentation/Presentation';
import Parcours from './components/parcours/Parcours';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Presentation} />
        <Route path="/mon-parcours" exact component={Parcours} />
      </Switch>
    </>
);
}

export default App;
