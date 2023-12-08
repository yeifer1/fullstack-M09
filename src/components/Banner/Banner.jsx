import  { useEffect, useState } from 'react';
import './Banner.css';
import logoBoleto from '../Navbar/logoBoleto.png'; 

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const images = document.querySelectorAll('.banner-img');
      images[activeIndex].classList.remove('active');
      const nextIndex = (activeIndex + 1) % images.length;
      images[nextIndex].classList.add('active');
      setActiveIndex(nextIndex);
    }, 3000); // Cambia de imagen cada 3 segundos

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="container banner">
   
      <img id="img11" className="banner-img" src={logoBoleto} alt="Logo Boleto" />
      <img id="img1" className="banner-img active" src="https://i.gifer.com/LUYB.gif" alt="Imagen 1" />
      <img id="img2" className="banner-img" src="https://i.redd.it/g1a3v0aw3ck81.gif" alt="Imagen 2" />
      <img id="img3" className="banner-img" src="https://media3.giphy.com/media/X6vlaVVTcUFrujnvx6/source.gif" alt="Imagen 3" />
      <img id="img4" className="banner-img" src="https://64.media.tumblr.com/18ed67ffb8eaf08eb7194a3e1b3dec7d/66609d4925220323-d8/s540x810/5a6cc12b872ad7ba7d4af2393cb9807d04ebefbc.gif" alt="" />
      <img id="img5" className="banner-img" src="https://media.tenor.com/VNT5IDP9rgQAAAAd/mortal-kombat-cage-match.gif" alt="" />
      <img id="img6" className="banner-img" src="https://media1.giphy.com/media/c0irAkZvKIQCAfwcyg/source.gif" alt="" />
      <img id="img7" className="banner-img" src="https://media2.giphy.com/media/78RzWaL2HxIWizsiJz/giphy.gif" alt="" />
      <img id="img8" className="banner-img" src="https://64.media.tumblr.com/fdaa7a24b68e258a739f67134cc9f9de/dbd2a950d7858e4f-21/s540x810/55840d82e1145bff6715f374f50b139a865e88f7.gif" alt="" />
      <img id="img9" className="banner-img" src="https://images.thespinoff.co.nz/1/2023/07/SoundOfFreedom.gif" alt="" />
      <img id="img10" className="banner-img" src="https://media.tenor.com/YKx6Yz3jI4UAAAAC/uri-josh.gif" alt="" />
    </div>
  );
};

export default Banner;
