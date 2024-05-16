import React, { useState } from 'react';
import './review.css'; 
import pantaitanjung from '../img/pantaitanjung.jpg';
import lengkuas from '../img/lengkuas.jpeg';
import tanjungkalayang from '../img/tanjungkalayang.JPG';
import batulayar from '../img/batuberlayar.jpg';
import burung from '../img/Pulauburung.jpg';
import bukit from '../img/bukitperamun.jpg';
import Navbar from '../components/Navbar';

export default function Belitung() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const handleExploreClick = () => {
    setShowNavbar(!showNavbar);
    setShowFooter(!showFooter);
    setShowButton(false);
  };

  const Card = ({ frontImage, backImage, title, info }) => (
    <div className="flip flip-vertical">
      <div className="front" style={{ backgroundImage: `url(${frontImage})` }}>
        <h1 className="text-shadow">{title}</h1>
      </div>
      <div className="back" style={{ backgroundImage: `url(${backImage})` }}>
        <h2>Info</h2>
        <p>{info}</p>
=      </div>
    </div>
  );

const VerticalFlipCards = () => {
    return (
      <>
        <div>
          <h1 className="title">Pariwisata Belitung</h1>
          <div className="flip-cards">
            <Card
              frontImage={burung}
              backImage={burung}
              title="Bird Island"
              info="Pulau Burong (pulau Burung), terletak di pantai Utara Belitung di desa nelayan Tanjung Binga. Luas pulau kurang lebih 2 hektar, dikelilingi pasir putih dan bebatuan granit yang tersebar di pantai dan laut di sekitar pulau. Waktu terbaik untuk ke pulau burung adalah pada saat menjelang sore, terutama jika anda ingin mengambil foto yang bagus dengan latar belakang batu kepala burung yang semakin terkenal itu. Pada sore hari matahari akan jatuh di depan anda dengan batu burung di latar belakang. Perjalanan ke pulau Burong memakan waktu 30 menit dari pantai Tanjung Kelayang atau 15 menit dari kampung nelayan Tanjung Binga. Perjalanan ke pulau Burong biasaya dilakukan dalam satu trip dengan perjalanan ke pulau Lengkuas.Di pulau burung terdapat beberapa bungalow di bawah pepohonan kelapa yang bisa anda gunakan untuk beristirahat. Bagi anda yang suka berpetualang, berjalan mengelilingi pulau mencari pemandangan dan bentuk unik dari batu-batu granit yang tersebar di sekeliling pulau akan menjadikan pengalaman yang mengesankan untuk menghabiskan waktu di pulau Burong ini."
              />
            <Card
              frontImage={pantaitanjung}
              backImage={pantaitanjung}
              title="Tanjung Tinggi Beach"
              info="Tanjung tinggi adalah pantai yang diapit oleh dua semenanjung, yaitu tanjung Kelayang dan tanjung Pendam. Nama pantai ini diambil dari kata tanjung yang artinya semenanjung dan tinggi yang artinya pantai yang memiliki bebatuan yang tinggi. Pantai ini memiliki area seluas 80 hektar, berpasir putih, dan terdapat ratusan batu granit besar yang tersebar di kedua semenanjung dan juga di laut di depan pantai.Pantai Tanjung Tinggi berada di Kecamatan Sijuk, Kabupaten Belitung, Bangka Belitung. Pantai Tanjung Tinggi ini pernah dijadikan lokasi shuting film Laskar Pelangi dan Sang Pemimpi, jadi tak jarang para wisatawan luar menyebut pantai tanjung tinggi ini dengan sebutan pantai Laskar Pelangi.Tiket masuk Pantai Tanjung Tinggi ini gratis, kamu hanya perlu membayar biaya parkir kendaraan yang kamu bawa."
              />
            <Card
              frontImage={lengkuas}
              backImage={lengkuas}
              title="Lengkuas Island"
              info="Pulau Lengkuas adalah salah sebuah pulau di Provinsi Kepulauan Bangka Belitung.Daya tarik utama di pulau ini adalah sebuah mercusuar tua yang dibangun oleh pemerintah Kolonial Belanda pada tahun 1882. Hingga saat ini, mercusuar tersebut masih berfungsi sebagai penuntun lalu lintas kapal yang melewati atau keluar masuk Pulau Belitung. Pulau Lengkuas Belitung dapat dicapai dengan menyewa perahu nelayan dari beberapa tempat, yaitu Tanjung Kelayang, Tanjung Binga, atau Tanjung Tinggi.bila ingin ke puncak mercusuar, dikenakan biaya sebesar Rp 5 ribu. Pulau ini juga buka selama 24 jam, jadi pengunjung bisa datang kapan saja."
              />
            <Card
              frontImage={bukit}
              backImage={bukit}
              title="Peramun Hill"
              info="Bukit Peramun merupakan hutan digital pertama yang ada di Indonesia. Hal tersebut dibuktikan dengan diraihnya rekor MURI di tahun 2023 kemarin. Dimana Bukit Peramun dinobatkan sebagai hutan digital pertama berbasis masyarakat di Indonesia. Penggunaan teknologi digital tersebut dapat terlihat sebelum pengunjung eskplor Bukit Peramun lebih jauh. Guide akan memberikan bukti dimana sebuah foto dapat berubah menjadi video yang dapat memberikan informasi dengan sangat lengkap. Lokasi Bukit Peramun berada di Jl. Peramun, Desa Air Selumar, Kecamatan Sijuk, Kabupaten Belitung, Kepulauan Bangka Belitung.Harga tiket masuk Bukit Peramun mulai dari Rp. 50.000,- sampai dengan Rp. 200.000an per orang. Harga tersebut sudah termasuk jasa guide atau pemandu. Pengunjung harus melakukan reservasi dan pembelian tiket di website resmi Bukit Peramun"
              />
            <Card
              frontImage={tanjungkalayang}
              backImage={tanjungkalayang}
              title="Tanjung Kalayang Beach"
              info="Pantai Tanjung Kelayang pantas menyandang gelar pantai indah negara tropis. Di sini, wisatawan akan disuguhkan pemandangan lautan luas berwarna biru bergradasi. Mulai dari toska di tepian pantai, biru muda, dan biru tua di tengah lautan. Jika dilihat dari dekat, perairannya pun tampak begitu jernih, hingga dasar pantai terlihat jelas. Pantai ini menyuguhkan keindahan batu granit raksasa dan desa wisata yang wajib dikunjungi. Dilansir situs Provinsi Kepulauan Bangka Belitung, batu granit di Pantai Tanjung Kelayang termasuk objek wisata Geopark Belitong yang ditetapkan UNESCO pada tahun 2021. Lokasinya berada di Kecamatan Sijuk, Kabupaten Belitung, sekitar 27 km dari Ibukota Kabupaten Belitung. Tarif masuk destinasi ini tergolong terjangkau yakni hanya Rp 8.000 per orang."
              />
            <Card
              frontImage={batulayar}
              backImage={batulayar}
              title="Batu Berlayar Island"
              info="Pulau Batu Berlayar (Sailing Rock) adalah formasi batu-batu granit raksasa dimana terdapat 2 batu besar berdiri vertikal berbentuk layar dengan pulau pasir putih sebagai kapal nya. Formasi itu membuat penduduk Belitung menamakan tempat ini Batu Berlayar. Pulau kecil ini anda salah satu atraksi unik untuk melakukan tour island hooping di Belitung ditempuh sekitar 15 menit dari Tanjung Kelayang.Laut di sekitar pulau sangat indah dan dangkal, dengan air laut jernih dan banyak juga terdapat terumbu karang. Tetap HATI-HATI, kadangkala ada banyak Bulu Babi (Sea Urchin) sejenis binatang laut berduri seperti landak dengan duri-duri yang tajam setajam jarum. Ada satu bagian yang unik dari pulau Berlayar, yaitu sebuah batu granit di tepi pantai yang sebagian tertutup air dimana bagian atasnya berbentuk seperti sirip ikan hiu atau mirip juga dengan gigi ikan hiu. Belum ada nama batu ini, jadi mari kita namakan saja Batu Shark Fin (sirip hiu)."
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
