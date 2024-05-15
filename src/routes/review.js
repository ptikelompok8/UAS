import React, { useState } from 'react';
import './review.css'; 
import tikus from '../img/tikus.jpeg';
import pantaitanjung from '../img/pantaitanjung.jpg';
import lengkuas from '../img/lengkuas.jpeg';
import danaubiru from '../img/danaubiru.jpg';
import tanjungkalayang from '../img/tanjungkalayang.JPG';
import pagodatri from '../img/pagodatri.jpg';
import Navbar from '../components/Navbar';

export default function Review() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const handleExploreClick = () => {
    setShowNavbar(!showNavbar);
    setShowFooter(!showFooter);
    setShowButton(false);
  };

  const Card = ({ frontImage, backImage, title, info, API }) => (
    <div className="flip flip-vertical">
      <div className="front" style={{ backgroundImage: `url(${frontImage})` }}>
        <h1 className="text-shadow">{title}</h1>
      </div>
      <div className="back" style={{ backgroundImage: `url(${backImage})` }}>
        <h2>Info</h2>
        <p>{info}</p>
        <h2 className="api-box">MAPS</h2>
        <p>{API}</p>
      </div>
    </div>
  );

const VerticalFlipCards = () => {
    return (
      <>
        <div>
          <h1>Bangka Belitung</h1>
          <div className="flip-cards">
            <Card
              frontImage={tikus}
              backImage={tikus}
              title="Tikus Beach"
              info="Pantai tikus secara keseluruhan memiliki luas mencapai delapan hektar. Pantai ini dinamakan pantai tikus juga mempunyai 2 asal-usul berupa dulunya pantai ini banyak ditemukan jalan tikus untuk mencapai pantai ini, asal-usul lainnya yaitu nama pantai ini berasal dari julukan sesepuh setempat yang dijuluki San Lo Chu(Tikus Hutan), dijuluki seperti tu karena sangat cepat jika melewati semak belukar. Pantai tikus juga menawarkan keindahan yang cukup indah Pantai Tikus Sungailiat berada di Desa Rebo, Kel. Kenangan, Sungailiat, Kab. Bangka, Kep. Bangka Belitung. Jaraknya sekitar 20 menit dari Sungailiat dengan jarak kurang lebih 12km. Tiket Masuk pantai tikus untuk orang dewasa adalah 5k dan untuk anak-anak gratis."
              API="davin ganteng banget"
              />
            <Card
              frontImage={pantaitanjung}
              backImage={pantaitanjung}
              title="Tanjung Tinggi Beach"
              info="Tanjung tinggi adalah pantai yang diapit oleh dua semenanjung, yaitu tanjung Kelayang dan tanjung Pendam. Nama pantai ini diambil dari kata tanjung yang artinya semenanjung dan tinggi yang artinya pantai yang memiliki bebatuan yang tinggi. Pantai ini memiliki area seluas 80 hektar, berpasir putih, dan terdapat ratusan batu granit besar yang tersebar di kedua semenanjung dan juga di laut di depan pantai.Pantai Tanjung Tinggi berada di Kecamatan Sijuk, Kabupaten Belitung, Bangka Belitung. Pantai Tanjung Tinggi ini pernah dijadikan lokasi shuting film Laskar Pelangi dan Sang Pemimpi, jadi tak jarang para wisatawan luar menyebut pantai tanjung tinggi ini dengan sebutan pantai Laskar Pelangi.Tiket masuk Pantai Tanjung Tinggi ini gratis, kamu hanya perlu membayar biaya parkir kendaraan yang kamu bawa."
              API="Richard rajin banget"
              />
            <Card
              frontImage={lengkuas}
              backImage={lengkuas}
              title="Lengkuas Island"
              info="Pulau Lengkuas adalah salah sebuah pulau di Provinsi Kepulauan Bangka Belitung.Daya tarik utama di pulau ini adalah sebuah mercusuar tua yang dibangun oleh pemerintah Kolonial Belanda pada tahun 1882. Hingga saat ini, mercusuar tersebut masih berfungsi sebagai penuntun lalu lintas kapal yang melewati atau keluar masuk Pulau Belitung. Pulau Lengkuas Belitung dapat dicapai dengan menyewa perahu nelayan dari beberapa tempat, yaitu Tanjung Kelayang, Tanjung Binga, atau Tanjung Tinggi.bila ingin ke puncak mercusuar, dikenakan biaya sebesar Rp 5 ribu. Pulau ini juga buka selama 24 jam, jadi pengunjung bisa datang kapan saja."
              API="wilbert cakep banget"
              />
            <Card
              frontImage={danaubiru}
              backImage={danaubiru}
              title="Kaolin Lake"
              info="Danau Kaolin terletak di Desa Nibung, Kecamatan Koba, Kabupaten Bangka Tegah, Provinsi Bangka Belitung. Danau Kaolin merupakan salah satu bekas tambang yang menjadi obyek wisata. Pemandangan kontras muncul dari kejernihan air biru tosca dengan gundukan tanah berpasir putih yang menjadi bukit-bukit kecil mengelilingi area Danau Kaolin.Tempat ini nampak seperti gurun pasir namun berwarna putih bersih. Hal itu dikarenakan pasir di sana mengandung banyak mineral kaolin. Saking banyaknya, banyak ditemui mineral tersebut menyatu dan membentuk seperi sebuah gunung pasir yang menakjubkan. Danau Kaolin berjarak kurang lebih 60 Km dari Bandara Depati Amir dan sekitar 15 Km dari ibu kota Kabupaten Bangka Tengah. Tiket masuk ke dalam Danau Kaolin maka pengunjung harus membayar Rp 10.000."
              API="jap cool banget"
              />
            <Card
              frontImage={tanjungkalayang}
              backImage={tanjungkalayang}
              title="Tanjung Kalayang Beach"
              info="Pantai Tanjung Kelayang pantas menyandang gelar pantai indah negara tropis. Di sini, wisatawan akan disuguhkan pemandangan lautan luas berwarna biru bergradasi. Mulai dari toska di tepian pantai, biru muda, dan biru tua di tengah lautan. Jika dilihat dari dekat, perairannya pun tampak begitu jernih, hingga dasar pantai terlihat jelas. Pantai ini menyuguhkan keindahan batu granit raksasa dan desa wisata yang wajib dikunjungi. Dilansir situs Provinsi Kepulauan Bangka Belitung, batu granit di Pantai Tanjung Kelayang termasuk objek wisata Geopark Belitong yang ditetapkan UNESCO pada tahun 2021. Lokasinya berada di Kecamatan Sijuk, Kabupaten Belitung, sekitar 27 km dari Ibukota Kabupaten Belitung. Tarif masuk destinasi ini tergolong terjangkau yakni hanya Rp 8.000 per orang."
              API="ferdi turu"
              />
            <Card
              frontImage={pagodatri}
              backImage={pagodatri}
              title="Tri Agung Temple"
              info="Tujuan dari dibangunnya Pagoda Puri Tri agung yaitu untuk menjadikan Bangka sebagai kawasan wisata religus. Pagoda Puri Tri Agung yang terletak di Desa Rebo, kecamatan Sungailiat ini. Kamu juga bisa menyaksikan acara perayaan Cap Gomeh di Pagoda Puri Tri Agung Sungailiat. Yang kata jumlah pengunjungnya membludak saat perayaan cap gomeh.Letak Puri Tri Agung pun ternyata begitu strategis karena lokasinya yang dekat dengan kawasan wisata pantai. Beberapa pantai terdekat yang bisa kamu kunjungi adalah Pantai Tikus, Pantai Tikus Emas, dan Pantai Tanjung Pesona. Tenang aja, kamu bisa menikmati keindahan Puri Tri Agung ini tanpa mengeluarkan uang sepeser pun. Cukup siapkan uang bensin saja."
              API="SEMUA TURU"
              />
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      {showButton && <button onClick={handleExploreClick}>Explore</button>}
      {showNavbar && <Navbar />}
      <VerticalFlipCards />
    </div>
  );
}
