import { useState } from "react";
import "../css/GalleryPage.css";

const galleryImageModules = import.meta.glob(
    [
        "../assets/Gallery Photos/BTS/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
        "../assets/Gallery Photos/Production Stills/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
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

const GallerySection = ({ title, images, onImageClick }) => {
    if (images.length === 0) {
        return null;
    }

    return (
        <section className="gallery-section">
            <h2>{title}</h2>

            <div className="gallery-grid">
                {images.map((image) => (
                    <button
                        key={image.src}
                        type="button"
                        className="gallery-image-button"
                        onClick={() => onImageClick(image)}
                        aria-label={`Expand ${image.alt}`}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="gallery-image"
                            loading="lazy"
                        />
                    </button>
                ))}
            </div>
        </section>
    );
};

const GalleryPage = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openImage = (image) => {
        setSelectedImage(image);
    };

    const closeExpandedImage = () => {
        setSelectedImage(null);
    };

    const showPreviousImage = () => {
        const currentIndex = galleryImages.findIndex(
            (image) => image.src === selectedImage.src
        );

        const previousIndex =
            currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;

        setSelectedImage(galleryImages[previousIndex]);
    };

    const showNextImage = () => {
        const currentIndex = galleryImages.findIndex(
            (image) => image.src === selectedImage.src
        );

        const nextIndex =
            currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;

        setSelectedImage(galleryImages[nextIndex]);
    };

    return (
        <div className="gallery-page">
            <h1>Gallery</h1>

            <GallerySection
                title="Behind the Scenes"
                images={btsImages}
                onImageClick={openImage}
            />

            <GallerySection
                title="Production Stills"
                images={productionStillImages}
                onImageClick={openImage}
            />

            {selectedImage && (
                <div
                    className="gallery-modal"
                    role="dialog"
                    aria-modal="true"
                    aria-label={selectedImage.alt}
                >
                    <button
                        type="button"
                        className="gallery-modal-close"
                        onClick={closeExpandedImage}
                        aria-label="Close expanded image"
                    >
                        ×
                    </button>

                    <button
                        type="button"
                        className="gallery-modal-arrow gallery-modal-arrow-left"
                        onClick={showPreviousImage}
                        aria-label="Show previous image"
                    >
                        ‹
                    </button>

                    <img
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                        className="gallery-modal-image"
                    />

                    <button
                        type="button"
                        className="gallery-modal-arrow gallery-modal-arrow-right"
                        onClick={showNextImage}
                        aria-label="Show next image"
                    >
                        ›
                    </button>
                </div>
            )}
        </div>
    );
};

export default GalleryPage;