function Buy({ isOpen, onClose, image }) {
  if (!isOpen) return null;
  const sizes = [
    { name: "Souvenir", size: "10x15 cm", price: "€10" },
    { name: "Mémoire", size: "20x30 cm", price: "€50" },
    { name: "Héritage", size: "30x40 cm", price: "€100" },
    { name: "Chef-d'œuvre", size: "40x60 cm", price: "€300" },
  ];

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          <i className="fa fa-times" style={{ color: 'black' }}></i>
        </button>

        <div className="popup-image-container">
          <img
            src={image.src}
            alt={image.alt}
            className="popup-image"
          />
        </div>

        <div className="size-options">
          {sizes.map((size, index) => (
            <button
              key={index}
              className="size-option"
              onClick={() =>
                window.open(
                  `https://wa.me/+33766197937/?text=Salut, j'aimerais bien acheter la photo numéro ${
                    image.id
                  }, ${size.size}!`,
                  "_blank"
                )
              }
            >
              <h3>{size.name}</h3>
              <p>{size.size}</p>
              <p className="price">{size.price}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Buy;
