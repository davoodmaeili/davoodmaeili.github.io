function Gallery({title, imageUrl,galleryPhotos}) {
  return (
    <div>
      {/* Hero section */}
      <div className="iran-container">
        <img 
          src={imageUrl}
          alt="Gallery cover image" 
          className="hero-image"
        />
        
        <div className="content-overlay">
          <h1 className="title">{title}</h1>
          <a href="#gallery-section" className="view-gallery-btn">VIEW GALLERY</a>
        </div>
        
        <div className="photographer-info">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img 
              src="https://logos.pixieset.com/workspace-0324462/029e73ca8b70af9ffb87847a38b3a887-small.jpg"
              alt="Davood Maeili" 
              className="photographer-logo"
            />
            <span className="photographer-name">DAVOOD MAEILI</span>
          </div>
        </div>
      </div>

      {/* Gallery grid */}
      <div id="gallery-section" className="gallery-photos-grid">
        {galleryPhotos.map(photo => (
          <div key={photo.id} className="gallery-photo-item">
            <img 
              src={photo.src} 
              alt={photo.alt}
              className="gallery-photo"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      {/* Todo another component for the footer */}
      <footer>
        <div className="footer-content">
          <p>© DAVOOD MAEILI</p>
          <p>Made with <i className="fa fa-heart"></i> by <a href="https://remotion.live" target="_blank" rel="noopener noreferrer">remotion.live</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;
