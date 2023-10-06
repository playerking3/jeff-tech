import './App.css';
import Header from "./components/Header";
import Banner from "./components/Banner";
import MaisVendidos from "./components/MaisVendidos";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Banner></Banner>
        <MaisVendidos></MaisVendidos>
        <Footer></Footer>
    </div>
  );
}

export default App;
