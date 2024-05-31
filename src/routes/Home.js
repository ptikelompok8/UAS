import React from "react";
import videoBg from "../video/VideoBabel.mp4";
import Lengkuas from '../img/lengkuas.jpeg';
import DanauBiru from '../img/danaubiru.jpg';
import PagodaTri from '../img/pagodatri.jpg';
import PantaiTK from "../img/tanjungkalayang.JPG";
import Tanjung from "../img/pantaitanjung.jpg";
import PBangka from "../img/Bangka.png";
import Timah from "../img/Timah.jpg";
import Lada from "../img/Lada.jpg";
import Tarsius from "../img/Tarsius.jpg";
import PBB from "../img/PBB.jpg";
import PBelitung from "../img/Belitung.png";
import Pantai from "../img/Pantai.jpg";
import Martabak from "../img/Martabak.jpg";
import Lempah from "../img/Lempah.jpg";
import Laskar from "../img/laskarpelangi.jpg";
import "./HomeStyle.css";
import axios from 'axios';
import YouTubeVideo from './YouTubeVideo'; 
import WeatherComponent from './WeatherComponent'; // Import WeatherComponent

export function Home() {
  return (
    <div className="Home">
      <div className="HomeContent">
        <h1 className="Name">Welcome to Bangka Belitung</h1>
        <div className="videoContainer">
          <video className="VideoBackground" src={videoBg} autoPlay loop muted />
        </div>
      </div>

      <div className="ContentTri">
        <div className="slide">
          <span id="slide-1"></span>
          <span id="slide-2"></span>
          <span id="slide-3"></span>
          <span id="slide-4"></span>
          <span id="slide-5"></span>

          <div className="ContentThree">
            <img className="Lengkuas" src={Lengkuas} alt="Lengkuas Island" />
            <img className="DanauBiru" src={DanauBiru} alt="Danau Biru" />
            <img className="PagodaTri" src={PagodaTri} alt="Pagoda Tri Dharma" />
            <img className="TanjungKalayang" src={PantaiTK} alt="Pantai Tanjung Kalayang" />
            <img className="PantaiTanjung" src={Tanjung} alt="Pantai Tanjung Tinggi" />
          </div>
        </div>

        <div className="navi">
          <a href="#slide-1">1</a>
          <a href="#slide-2">2</a>
          <a href="#slide-3">3</a>
          <a href="#slide-4">4</a>
          <a href="#slide-5">5</a>
        </div>
      </div>

      <div className="ContentFour">
        <div className="Bangkaa">
          <img className="BangkaImg" src={PBangka} alt="Bangka Island" />
          <div className="FaktaBangka">
            <div className="Timah">
              <img className="TimahImg" src={Timah} alt="Timah Mine" />
              <h2>Merupakan Daerah Penghasil Timah Terbesar di Indonesia</h2>
            </div>
            <div className="Lada">
              <img className="LadaImg" src={Lada} alt="Lada Plantation" />
              <h2>Merupakan Daerah Penghasil Lada Putih Terbesar di Dunia</h2>
            </div>
            <div className="PBB">
              <img className="PBBImg" src={PBB} alt="PBB Building" />
              <h2>Menjadi Tempat Perundingan PBB Pada 1949</h2>
            </div>
            <div className="Tarsius">
              <img className="TarsiusImg" src={Tarsius} alt="Tarsius" />
              <h2>Memiliki Hewan Endemik Tarsius Yaitu Monyet Terkecil Di Dunia</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="ContentFive">
        <div className="Belitungg">
          <div className="FaktaBelitung">
            <div className="Lempah">
              <h2>Memilki makanan khas olahan ikan yaitu Lempah Darat</h2>
              <img className="LempahImg" src={Lempah} alt="Lempah Darat" />
            </div>
            <div className="Pantai">
              <h2>Memiliki jumlah pantai yang sangat banyak dengan panorama yang memukau</h2>
              <img className="PantaiImg" src={Pantai} alt="Pantai" />
            </div>
            <div className="Laskar">
              <h2>Memiliki Julukan Negeri Laskar Pelangi</h2>
              <img className="LaskarImg" src={Laskar} alt="Laskar Pelangi" />
            </div>
          </div>
          <img className="BelitungImg" src={PBelitung} alt="Belitung Island" />
        </div>
      </div>

      <div className="ContentTwo">
        <button className="Bangka">
          <a className="Buttontwo" href="/Bangka">
            <i className="fa-solid fa-user-secret"></i>Bangka
          </a>
        </button>
        <button className="Belitung"> 
          <a className="Buttontwo" href="/Belitung">
            <i className="fa-solid fa-user-secret"></i>Belitung
          </a>
        </button>
      </div>

      <YouTubeVideo /> 
      <WeatherComponent />
    </div>
  );
}
