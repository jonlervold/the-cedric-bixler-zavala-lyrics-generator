import './App.css';
import Footer from './components/Footer';
import MainBlock from './components/MainBlock';
import Container from './components/styles/Container';

export function App() {
  return (
    <Container>
      <img alt="Portrait of Cedric Bixler" src="./assets/cedric.jpg" />
      <MainBlock />
      <Footer />
    </Container>
  );
}

export default App;
