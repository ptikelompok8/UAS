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
import 'bootstrap/dist/css/bootstrap.min.css';

export function Home() {
  return (
    <>
      <div className="Home">
        <div className="HomeContent position-relative text-center">
          <ul className="content list-unstyled">
            <li>
              <h1 className="Name">Bangka Belitung</h1>
            </li>
          </ul>
          <div className="videoContainer">
            <video className="VideoBackground w-100" src={videoBg} autoPlay loop muted />
          </div>
        </div>

        <div className="ContentTri my-5">
          <div className="slide">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={Lengkuas} className="d-block w-100" alt="Lengkuas" />
                </div>
                <div className="carousel-item">
                  <img src={DanauBiru} className="d-block w-100" alt="DanauBiru" />
                </div>
                <div className="carousel-item">
                  <img src={PagodaTri} className="d-block w-100" alt="PagodaTri" />
                </div>
                <div className="carousel-item">
                  <img src={PantaiTK} className="d-block w-100" alt="PantaiTK" />
                </div>
                <div className="carousel-item">
                  <img src={Tanjung} className="d-block w-100" alt="Tanjung" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div className="ContentFour container my-5">
          <div className="row">
            <div className="col-md-6">
              <img className="img-fluid" src={PBangka} alt="Bangka" />
            </div>
            <div className="col-md-6">
              <div className="FaktaBangka">
                <div className="Timah my-3">
                  <img className="img-fluid" src={Timah} alt="Timah" />
                  <h1>Merupakan Daerah Penghasil Timah Terbesar di Indonesia</h1>
                </div>
                <div className="Lada my-3">
                  <img className="img-fluid" src={Lada} alt="Lada" />
                  <h1>Merupakan Daerah Penghasil Lada Putih Terbesar di Dunia</h1>
                </div>
                <div className="PBB my-3">
                  <img className="img-fluid" src={PBB} alt="PBB" />
                  <h1>Menjadi Tempat Perundingan PBB Pada 1949</h1>
                </div>
                <div className="Tarsius my-3">
                  <img className="img-fluid" src={Tarsius} alt="Tarsius" />
                  <h1>Memiliki Hewan Endemik Tarsius Yaitu Monyet Terkecil Di Dunia</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ContentFive container my-5">
          <div className="row">
            <div className="col-md-6 order-md-2">
              <img className="img-fluid" src={PBelitung} alt="Belitung" />
            </div>
            <div className="col-md-6 order-md-1">
              <div className="FaktaBelitung">
                <div className="Lempah my-3">
                  <h1>Memilki makanan khas olahan ikan yaitu Lempah Darat</h1>
                  <img className="img-fluid" src={Lempah} alt="Lempah" />
                </div>
                <div className="Pantai my-3">
                  <h1>Memiliki jumlah pantai yang sangat banyak dengan panorama yang memukau</h1>
                  <img className="img-fluid" src={Pantai} alt="Pantai" />
                </div>
                <div className="Laskar my-3">
                  <h1>Memiliki Julukan Negeri Laskar Pelangi</h1>
                  <img className="img-fluid" src={Laskar} alt="Laskar Pelangi" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ContentTwo container my-5">
          <div className="row">
            <div className="col-6">
              <a className="btn btn-primary w-100" href="/Bangka">
                Bangka
              </a>
            </div>
            <div className="col-6">
              <a className="btn btn-primary w-100" href="/Belitung">
                Belitung
              </a>
            </div>
          </div>
        </div>
      </div>

      <YouTubeVideo />
    </>
  );
};
