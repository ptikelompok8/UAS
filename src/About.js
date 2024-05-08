import "./styles.css";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1 className="Name">Bangka Belitung</h1>
      <button className="Explore ">Explore Now</button>
      <table className="AboutUs">
        <div className="AboutUss">
                <h2>PT. Babeltrip Indonesia</h2>
                <br></br>
                <p>Scientia Boulevard</p>
                <p>Gading Serpong, Tangerang</p>
                <p>Tel : (021) 123456789</p>
                <br></br>
                <div className="Social">
                <i id="Facebook" class="fa-brands fa-facebook"></i>
                <i id="Instagram" class="fa-brands fa-instagram"></i>
                <i id="Gmail" class="fa-solid fa-envelope"></i>
                </div>
          </div>
      </table>
    </div>
  );
}
