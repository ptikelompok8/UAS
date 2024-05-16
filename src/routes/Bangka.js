import React, { useState } from 'react';
import './review.css'; 
import tikus from '../img/tikus.jpeg';
import danaubiru from '../img/danaubiru.jpg';
import pagodatri from '../img/pagodatri.jpg';
import penyusuk from '../img/penyusuk.jpg';
import pasirpadi from '../img/pasirpadi.jpeg';
import pantaimatras from '../img/pantaimatras.jpeg';
import Navbar from '../components/Navbar';

export default function Bangka() {
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
          <h1 className="title"> Pariwisata Bangka</h1>
          <div className="flip-cards">
            <Card
              frontImage={tikus}
              backImage={tikus}
              title="Tikus Beach"
              info="Pantai tikus secara keseluruhan memiliki luas mencapai delapan hektar. Pantai ini dinamakan pantai tikus juga mempunyai 2 asal-usul berupa dulunya pantai ini banyak ditemukan jalan tikus untuk mencapai pantai ini, asal-usul lainnya yaitu nama pantai ini berasal dari julukan sesepuh setempat yang dijuluki San Lo Chu(Tikus Hutan), dijuluki seperti tu karena sangat cepat jika melewati semak belukar. Pantai tikus juga menawarkan keindahan yang cukup indah Pantai Tikus Sungailiat berada di Desa Rebo, Kel. Kenangan, Sungailiat, Kab. Bangka, Kep. Bangka Belitung. Jaraknya sekitar 20 menit dari Sungailiat dengan jarak kurang lebih 12km. Tiket Masuk pantai tikus untuk orang dewasa adalah 5k dan untuk anak-anak gratis."
              />
            <Card
              frontImage={pantaimatras}
              backImage={pantaimatras}
              title="Matras Beach"
              info="Pantai ini sering disebut oleh banyak wisatawan sebagai Pantai Kuta Bali yang berada di Bangka. Bukan tanpa sebab, pantai ini memiliki garis pantai yang panjang sejauh 5 km membentang dari ujung utara hingga selatan. Setiap sisinya pun memiliki keindahannya tersendiri. Pantai Matras berlokasi di Kabupaten Bangka, Provinsi Bangka Belitung tepatnya di Desa Sinar Baru, Kecamatan Sungai Liat. Letaknya dari Pangkalpinang sejauh 40 km atau dapat ditempuh melalui perjalanan darat selama kurang lebih 1 jam. Pantai eksotis ini terletak tak jauh dari pusat kota sehingga memiliki akses yang mudah untuk dikunjungi. Selain itu, harga tiket yang sangat terjangkau menyebabkannya memiliki sebutan sebagai Pantai Rakyat oleh masyarakat sekitar."
              />
            <Card
              frontImage={penyusuk}
              backImage={penyusuk}
              title="Penyusuk Beach"
              info="Pantai penyusuk merupakan satu dari puluhan pantai indah yang ada di pulau laskar pelangi ini. Pantai ini sendiri lokasinya ada di Desa Bukit Ketok, Kecamatan Belinyu, Kabupaten Bangka. Bagi wisatawan yang ingin liburan mengunjung pantai keren di Kabupaten Bangka ini kalian cuma perlu mengeluarkan uang untuk tiket masuk sebesar Rp 3000 saja per orangnya. Dengan tiket masuk yang murah meriah tersebut kalian sudah bisa menikmati berbagai keindahan alam yang terhampar, baik itu pantainya yang indah atau ingin lebih puas lagi dengan menyewa perahu nelayan untuk mengeksplore pulau-pulau kecil di sekitarnya."
              />
            <Card
              frontImage={danaubiru}
              backImage={danaubiru}
              title="Kaolin Lake"
              info="Danau Kaolin terletak di Desa Nibung, Kecamatan Koba, Kabupaten Bangka Tegah, Provinsi Bangka Belitung. Danau Kaolin merupakan salah satu bekas tambang yang menjadi obyek wisata. Pemandangan kontras muncul dari kejernihan air biru tosca dengan gundukan tanah berpasir putih yang menjadi bukit-bukit kecil mengelilingi area Danau Kaolin.Tempat ini nampak seperti gurun pasir namun berwarna putih bersih. Hal itu dikarenakan pasir di sana mengandung banyak mineral kaolin. Saking banyaknya, banyak ditemui mineral tersebut menyatu dan membentuk seperi sebuah gunung pasir yang menakjubkan. Danau Kaolin berjarak kurang lebih 60 Km dari Bandara Depati Amir dan sekitar 15 Km dari ibu kota Kabupaten Bangka Tengah. Tiket masuk ke dalam Danau Kaolin maka pengunjung harus membayar Rp 10.000."
              />
            <Card
              frontImage={pasirpadi}
              backImage={pasirpadi}
              title="Pasir Padi Beach"
              info="Lokasi Pantai Pasir Padi yang menghadap langsung ke Laut Cina Selatan menjadi daya tarik tersendiri bagi para wisatawan. Meskipun, di sisi lain Pantai Pasir Padi sering pasang saat hari mulai sore. Lokasi Pantai Pasir Padi terletak di Kepulauan Bangka. Alamat Pantai Pasir Padi berada di Jalan Pantai Pasir Padi, Kota Pangkal Pinang, Provinsi Bangka Belitung.Tiket masuk Pantai Pasir Padi cukup dengan membayar parkir saja, yakni: Rp. 4.000,- untuk mobil dan Rp. 2.000,- untuk motor. Jam operasional Pantai Pasir Padi selama 24 jam.Sejarah Pantai Pasir Padi merujuk kepada diksi “padi” yang melekat pada nama pantai tersebut. Bagi kebanyakan orang mungkin akan kebingungan, dimana padinya? Jadi, sejarah Pantai Pasir Padi terkait erat dengan program penanaman padi di sekitar pesisir pantai, di jaman Hindia Belanda. Saat ini, kawasan yang sempat dijadikan tempat penanaman padi ditumbuhi oleh pohon-pohon kelapa. Namun, Pantai Pasir Padi mencatatkan sebuah sejarah penting tentang sebuah usaha membangun sistem ketahanan pangan."
              />
            <Card
              frontImage={pagodatri}
              backImage={pagodatri}
              title="Tri Agung Temple"
              info="Tujuan dari dibangunnya Pagoda Puri Tri agung yaitu untuk menjadikan Bangka sebagai kawasan wisata religus. Pagoda Puri Tri Agung yang terletak di Desa Rebo, kecamatan Sungailiat ini. Kamu juga bisa menyaksikan acara perayaan Cap Gomeh di Pagoda Puri Tri Agung Sungailiat. Yang kata jumlah pengunjungnya membludak saat perayaan cap gomeh.Letak Puri Tri Agung pun ternyata begitu strategis karena lokasinya yang dekat dengan kawasan wisata pantai. Beberapa pantai terdekat yang bisa kamu kunjungi adalah Pantai Tikus, Pantai Tikus Emas, dan Pantai Tanjung Pesona. Tenang aja, kamu bisa menikmati keindahan Puri Tri Agung ini tanpa mengeluarkan uang sepeser pun. Cukup siapkan uang bensin saja."
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
