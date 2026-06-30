import "../css/GalleryPage.css";

const galleryImageModules = import.meta.glob(
    [
        "../assets/Gallery Page/BTS/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
        "../assets/Gallery Page/Production Stills/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
    ],
    {
        eager: true,
        query: "?url",
        import: "default",
    }
);

const galleryImages = Object.entries(galleryImageModules)
    .map(([path, src]) => {
        const fileName = path.split("/").pop();

        const category = path.includes("/BTS/")
            ? "Behind the Scenes"
            : "Production Stills";

        return {
            src,
            alt: fileName
                .replace(/\.[^/.]+$/, "")
                .replace(/[-_]/g, " "),
            category,
        };
    })
    .sort((a, b) => a.alt.localeCompare(b.alt, undefined, { numeric: true }));

const btsImages = galleryImages.filter(
    (image) => image.category === "Behind the Scenes"
);

const productionStillImages = galleryImages.filter(
    (image) => image.category === "Production Stills"
);

const GallerySection = ({ title, images }) => {
    if (images.length === 0) {
        return null;
    }

    return (
        <section className="gallery-section">
            <h2>{title}</h2>

            <div className="gallery-grid">
                {images.map((image) => (
                    <img
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        className="gallery-image"
                        loading="lazy"
                    />
                ))}
            </div>
        </section>
    );
};

const GalleryPage = () => {
    return (
        <div className="gallery-page">
            <h1>Gallery</h1>

            <GallerySection title="Behind the Scenes" images={btsImages} />
            <GallerySection title="Production Stills" images={productionStillImages} />
        </div>
    );
};

export default GalleryPage;