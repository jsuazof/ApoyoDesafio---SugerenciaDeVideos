const IIFEDOM = (() => {
  function privateAttribute(url, id) {
    id.setAttribute("src", url);
  }

  return {
    publicAttribute(url, id) {
      privateAttribute(url, id);
    },
  };
})();

class Multimedia {
  constructor(url) {
    let _url = url;

    this.setUrl = (value) => (_url = value);
    this.getUrl = () => _url;
  }
  get url() {
    return this.getUrl();
  }
  set url(value) {
    this.setUrl(value);
  }
  setInicio() {
    return "este método es para realizar un cambio en la URL del video";
  }
};

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this._id = id;
  }
  playMultimedia() {
    IIFEDOM.publicAttribute(this.getUrl(), this._id);
  }
  setInicio(tiempo) {
    IIFEDOM.publicAttribute(`${this.getUrl()}?start=${tiempo}`, this._id);
  }
}

const videoMusica = document.querySelector("#musica");
const videoPelicula = document.querySelector("#peliculas");
const videoSerie = document.querySelector("#series");

  const video1 = new Reproductor(
    "https://www.youtube.com/embed/BtiiM3jeb_c",
    videoMusica
  );
  video1.setInicio(30);

  const video2 = new Reproductor(
    "https://www.youtube.com/embed/Z6LXG2TJPKg",
    videoPelicula
  );
  video2.playMultimedia();

  const video3 = new Reproductor(
    "https://www.youtube.com/embed/LuXd7QRLvvc",
    videoSerie
  );
  video3.playMultimedia();




