function App() {
  const [images, setImages] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  
  // Mock data - in a real app, you would fetch this from an API
  React.useEffect(() => {
    // Simulating API fetch
    setTimeout(() => {
      setImages([
        // {
        //   id: 1,
        //   title: 'IRAN',
        //   thumbnail: 'https://images.pixieset.com/76813198/5dabfe51ec4d9d9607fc4b980b2a325d-large.jpg',
        //   category: 'documentary',
        //   link: 'iran.html'
        // },
        {
          id: 1,
          title: 'TREMPÉ PAR LE VENT DE LA CHUTE',
          thumbnail: 'https://images.pixieset.com/20382198/2b8479815209f7f56f30b3264bd79038-large.jpg',
          category: 'conceptual',
          link: 'trempe-par-le-vent-de-la-chute.html'
        },
        // Add more portfolio items as needed
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="photography-app">
      <header className="app-header">
        <div className="social-links-header">
          <a href="https://www.facebook.com/d.maeili?locale=fr_FR" aria-label="Facebook"><i className="fa fa-facebook"></i></a>
          <a href="https://www.instagram.com/davood.maeili" aria-label="Instagram"><i className="fa fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/davood-maeili-274ba7b3/" aria-label="LinkedIn"><i className="fa fa-linkedin"></i></a>
        </div>
      </header>

      <main>
        <section className="profile-section">
          <div className="profile-image-container">
            <img 
              src="https://logos.pixieset.com/workspace-0324462/029e73ca8b70af9ffb87847a38b3a887-small.jpg" 
              alt="Davood Maeili"
              className="profile-image"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
          
          <h1 className="photographer-name">DAVOOD MAEILI</h1>
          
          <div className="bio-section">
            <p className="bio-text">
              Davood Maeili est un designer industriel et photographe freelance basé à Paris. Passionné 
              par la photographie, il capture des instants qui explorent des thèmes profonds tels que la 
              perte, l'identité et la réflexion intérieure. Ses images, souvent marquées par des contrastes 
              lumineux et sombres, racontent des histoires de solitude et de quête personnelle. Par son 
              travail, il cherche à créer une connexion émotionnelle avec le spectateur, alliant esthétique 
              et sensibilité philosophique.
            </p>
          </div>
          
          <div className="contact-info">
            <div className="contact-item">
              <i className="fa fa-phone"></i>
              <a href="tel:+33766197937" aria-label="Call us">
                <span>0766197937</span>
              </a>
            </div>
            <div className="contact-item">
              <i className="fa fa-envelope"></i>
              <a href="mailto:d.maeili64@gmail.com" aria-label="Email us">
                <span>d.maeili64@gmail.com</span>
              </a>
            </div>
          </div>
        </section>

        <section className="portfolio-section">
          {loading ? (
            <div className="loading">Loading gallery...</div>
          ) : (
            <div className="gallery-grid">
              {images.map(image => (
                <div key={image.id} className="gallery-item">
                  <a href={image.link} className="gallery-link">
                    <div className="image-container">
                      <img 
                        src={image.thumbnail} 
                        alt={image.title}
                        className="gallery-image"
                        onContextMenu={(e) => e.preventDefault()}
                      />
                    </div>
                    <h3 className="project-title">{image.title}</h3>
                  </a>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
      {/* Todo another component for the footer */}
      <footer>
        <div className="footer-content">
          <p>© DAVOOD MAEILI</p>
          <p>Made with <i className="fa fa-heart"></i> by <a href="https://remotion.live" target="_blank" rel="noopener noreferrer">remotion.live</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;