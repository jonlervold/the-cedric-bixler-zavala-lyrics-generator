import './App.css';
import MainBlock from './components/MainBlock';

export function App() {
  return (
    <div className="container">
      <img alt="Drawing of Cedric Bixler" src="../assets/cedric.jpg" />
      <MainBlock />
      <div className="footer">jonlervold.com // 2022</div>
    </div>
  );
}

export default App;
