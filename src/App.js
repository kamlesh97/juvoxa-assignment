
import './App.css';
import Navbar from './components/Navbar';
import { Table1 } from './components/Table1';
import {Table2} from './components/Table2'

function App() {
  return (
    <div className="App">
      {/* <Table2 /> */}
      <Navbar/>
      <Table1/>
    </div>
  );
}

export default App;
