import Sidebar from './components/Sidebar';
import Reviews from './components/Reviews';
import Rating from './components/Rating';
import Analysis from './components/Analysis';
import Visitors from './components/Visitors';
import './Styles.css';

function App() {
  return (
    <div>
     <Sidebar/>
     <Reviews/>
     <Rating/>
     <Analysis/>
     <Visitors/>
    </div>
  );
}

export default App;
