import './App.css';

import Banner from './components/Banner';
import PublicIP from './components/widgets/PublicIP';
function App() {
  return (
    <div className="App">
      <Banner>Sextant</Banner>
      <div className='container'>
      <div className='flex'>
      <div className='col-4'><PublicIP/></div>
       </div>
      </div>
    </div>
  );
}

export default App;
