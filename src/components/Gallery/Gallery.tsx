import { useState } from "react";

// Список изображений (лежат в public/gallery/)
const images = [
  "/public/gallery/IMG_2751.jpg",
  "/public/gallery/IMG_2750.jpg",
  "/public/gallery/IMG_2848.jpg",
  "/public/gallery/IMG_2865.jpg",
  "/public/gallery/IMG_2751.jpg",
  "/public/gallery/IMG_2864.jpg",
  "/public/gallery/IMG_2854.jpg",
  "/public/gallery/IMG_2853.jpg",
  "/public/gallery/IMG_2858.jpg",
  "/public/gallery/IMG_2855.jpg",
  "/public/gallery/IMG_2849.jpg",
  "/public/gallery/IMG_2762.jpg",
  "/public/gallery/IMG_2756.jpg",
  "/public/gallery/IMG_2755.jpg",
  "/public/gallery/IMG_2753.jpg",
  "/public/gallery/IMG_2745.jpg",
  "/public/gallery/IMG_2741.jpg",
  "/public/gallery/IMG_2736.jpg",
  "/public/gallery/IMG_2859.jpg",
  "/public/gallery/IMG_2735.jpg",
  "/public/gallery/IMG_2734.jpg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Галерея
        </h2>

        {/* Сетка фотографий */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition duration-300"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Фото ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Модальное окно */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-red-500 text-3xl font-bold hover:text-red-400 transition"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              ×
            </button>

            <button
              className="absolute left-6 text-red-500 text-2xl hover:text-red-800 transition"
              onClick={(e) => {
                e.stopPropagation();
                const index = images.indexOf(selectedImage);
                const prev =
                  images[(index - 1 + images.length) % images.length];
                setSelectedImage(prev);
              }}
            >
              ◀
            </button>

            <img
              src={selectedImage}
              alt="Увеличенное фото"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />

            <button
              className="absolute right-6 text-red-500 text-2xl hover:text-red-800 transition"
              onClick={(e) => {
                e.stopPropagation();
                const index = images.indexOf(selectedImage);
                const next = images[(index + 1) % images.length];
                setSelectedImage(next);
              }}
            >
              ▶
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
