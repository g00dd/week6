import './App.css';
import Footer from './components/Footer';
import Button from './components/Button';
import Image from './components/Image';
import Header from './components/Header';


function App() {
  const text = "버튼";

  return (
    <div>
      <Image/>
      <Button text = {text}/>
      <Footer />
      <Header/>

    </div>
  );
}

export default App;