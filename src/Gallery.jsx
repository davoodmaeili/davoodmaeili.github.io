function Gallery({ title, imageUrl, galleryPhotos }) {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [slectedImage, setSelectedImage] = React.useState(null);
  return (
    <div>
      <Buy
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        image={slectedImage}
      />
      {/* Donation header */}
      <div className="donation-header">
        <a
          href="https://revolut.me/davoodv9s6/eur5/websitedonation"
          target="_blank"
          rel="noopener noreferrer"
        >
          ☕️ Offrez-moi un café
        </a>
      </div>
      {/* Hero section */}
      <div className="iran-container">
        <img src={imageUrl} alt="Gallery cover image" className="hero-image" />

        <div className="content-overlay">
          <h1 className="title small-title">{title}</h1>
          <a href="#gallery-section" className="view-gallery-btn">
            VOIR LA GALERIE
          </a>
        </div>

        <div className="photographer-info">
          <a href="/" className="photographer-header">
            <img
              src="assets/davood.jpg"
              alt="Davood Maeili"
              className="photographer-logo"
            />
            <span className="photographer-name">DAVOOD MAEILI</span>
          </a>
        </div>
      </div>
      {/* Introduction section */}
      <div className="introduction-section">
        <div className="introduction-container">
          <div className="introduction-line"></div>
          <div className="introduction-text">
            <p>
              Cette série est composée de photomontages réalisés en deux
              périodes distinctes : avant mon immigration en France en 2018 et
              après, durant la pandémie de Covid.
            </p>
            <p>
              Il y a des années, lorsque j'avais 12 ou 13 ans, j'ai traversé une
              période dont la durée m'échappe aujourd'hui, mais où je faisais
              des rêves étranges. Peu à peu, ma conscience de ces rêves s'est
              intensifiée au point que la frontière entre le rêve et la réalité
              s'est presque effacée. Ces songes étaient un mélange d'histoires
              racontées durant mon enfance et d'imaginations qui s'y
              entremêlaient.
            </p>
            <p>
              Les éléments centraux de cette espièglerie enfantine ont pris la
              forme de poissons et de forêts, d'humidité et d'errance, et
              finalement de la perte.
            </p>
            <p>
              Le noyau initial de cette série s'est formé en Iran, s'appuyant
              sur ces récits et légendes. Quelques années plus tard, pendant le
              confinement, lorsque ces rêves sont étrangement revenus me hanter,
              j'ai trouvé un prétexte pour compléter cette série.
            </p>
            <p>
              Je ne peux y mettre un point final, car je ne conçois pas de fin
              au fait de rêver
            </p>
          </div>
          <div className="introduction-line"></div>
        </div>
      </div>
      {/* Gallery grid */}
      <div id="gallery-section" className="gallery-photos-grid">
        {galleryPhotos.map((photo) => (
          <div key={photo.id} className="gallery-photo-item">
            <img
              src={photo.src}
              alt={photo.alt}
              className="gallery-photo"
              loading="lazy"
              onClick={(e) => {
                e.currentTarget.classList.toggle("zoomed");
                document.body.classList.toggle("has-zoomed-image");
              }}
            />
            <button
              className="photo-ribbon"
              onClick={() => {
                setSelectedImage(photo);
                setIsPopupOpen(true);
              }}
            >
              <span>Acheter</span>
            </button>
          </div>
        ))}
      </div>
      {/* Todo another component for the footer */}
      <footer>
        <div className="footer-content">
          <p>© DAVOOD MAEILI</p>
          <p>
            Créé avec <i className="fa fa-heart"></i> par{" "}
            <a
              href="https://remotion.live"
              target="_blank"
              rel="noopener noreferrer"
            >
              remotion.live
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Gallery;
