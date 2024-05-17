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
import Tarsius from "../img/Tarsius.jpg"
import PBB from "../img/PBB.jpg"
import PBelitung from "../img/Belitung.png";
import Pantai from "../img/Pantai.jpg";
import Martabak from "../img/Martabak.jpg";
import Lempah from "../img/Lempah.jpg";
import Laskar from "../img/laskarpelangi.jpg";
import "./HomeStyle.css";
import axios from 'axios';
import YouTubeVideo from './YouTubeVideo'; 

export function Home  () {
  return (
    <>
      <div className="Home">
        <div className="HomeContent">
          <ul className="content">
            <li>
              <h1 className="Name">Bangka Belitung</h1>
            </li>
          </ul>
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
              <img className="Lengkuas" src={Lengkuas}></img>
              <img className="DanauBiru" src={DanauBiru}></img>
              <img className="PagodaTri" src={PagodaTri}></img>
              <img className="TanjungKalayang" src={PantaiTK}></img>
              <img className="PantaiTanjung" src={Tanjung}></img>
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
            <img className="BangkaImg" src={PBangka}></img>
            <div className="FaktaBangka">
              <div className="Timah">
                <img className="TimahImg" src={Timah}></img>
                <h1>Merupakan Daerah Penghasil Timah Terbesar di Indonesia</h1>
              </div>
              <div className="Lada">
                <img className="LadaImg" src={Lada}></img>
                <h1>Merupakan Daerah Penghasil Lada Putih Terbesar di Dunia</h1>
              </div>
              <div className="PBB">
                <img className="PBBImg" src={PBB}></img>
                <h1>Menjadi Tempat Perundingan PBB Pada 1949 </h1>
              </div>
              <div className="Tarsius">
                <img className="TarsiusImg" src={Tarsius}></img>
                <h1>Memiliki Hewan Endemik Tarsius Yaitu Monyet Terkecil Di Dunia</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="ContentTwo">
          <button className="Bangka">
          <li>
            <a className="Buttontwo" href="/Bangka">
             <i class="fa-solid fa-user-secret"></i>Bangka
            </a>
          </li>
          </button>
          <button className="Belitung"> 
          <li>
            <a className="Buttontwo" href="/Belitung">
             <i class="fa-solid fa-user-secret"></i>Belitung
            </a>
          </li>
          </button>
        </div>
      </div>

      <YouTubeVideo /> 
    </>
  );
};

