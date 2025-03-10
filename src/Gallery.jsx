

function Gallery({title, imageUrl}) {
  return (
    <div className="iran-container">
      <img 
        src={imageUrl} // Update with your actual image path
        alt="Iran landscape with people in tunnel" 
        className="hero-image"
      />
      
      <div className="content-overlay">
        <h1 className="title">{title}</h1>
        <button className="view-gallery-btn">VIEW GALLERY</button>
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
  );
};

export default Gallery;
