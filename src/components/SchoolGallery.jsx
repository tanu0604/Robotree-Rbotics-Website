"use client";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import anini1 from "../assets/gallery/JNVAnini/1.jpg";
import anini2 from "../assets/gallery/JNVAnini/2.jpg";
import anini3 from "../assets/gallery/JNVAnini/3.jpg";
import anini4 from "../assets/gallery/JNVAnini/4.jpg";
import anini5 from "../assets/gallery/JNVAnini/5.jpg";
import anini6 from "../assets/gallery/JNVAnini/6.jpg";
import anini7 from "../assets/gallery/JNVAnini/7.jpg";
import anini8 from "../assets/gallery/JNVAnini/8.jpg";
import anini9 from "../assets/gallery/JNVAnini/9.jpg";
import anini10 from "../assets/gallery/JNVAnini/10.jpg";

import anjaw1 from "../assets/gallery/JNVAnjaw/1.jpg";
import anjaw2 from "../assets/gallery/JNVAnjaw/2.jpg";
import anjaw3 from "../assets/gallery/JNVAnjaw/3.jpg";
import anjaw4 from "../assets/gallery/JNVAnjaw/4.jpg";
import anjaw5 from "../assets/gallery/JNVAnjaw/5.jpg";
import anjaw6 from "../assets/gallery/JNVAnjaw/6.jpg";
import anjaw7 from "../assets/gallery/JNVAnjaw/7.jpg";
import anjaw8 from "../assets/gallery/JNVAnjaw/8.jpg";
import anjaw9 from "../assets/gallery/JNVAnjaw/9.jpg";
import anjaw10 from "../assets/gallery/JNVAnjaw/10.jpg";

import img1 from "../assets/gallery/JnvKokrajhar/1.jpg";
import img2 from "../assets/gallery/JnvKokrajhar/2.jpg";
import img3 from "../assets/gallery/JnvKokrajhar/3.jpg";
import img4 from "../assets/gallery/JnvKokrajhar/4.jpg";
import img5 from "../assets/gallery/JnvKokrajhar/5.jpg";
import img6 from "../assets/gallery/JnvKokrajhar/6.jpg";
import img7 from "../assets/gallery/JnvKokrajhar/7.jpg";
import img8 from "../assets/gallery/JnvKokrajhar/8.jpg";
import img9 from "../assets/gallery/JnvKokrajhar/9.jpg";
import img10 from "../assets/gallery/JnvKokrajhar/10.jpg";

import Med1 from "../assets/gallery/JNVMednipur/1.jpg";
import Med2 from "../assets/gallery/JNVMednipur/2.jpg";
import Med3 from "../assets/gallery/JNVMednipur/3.jpg";
import Med4 from "../assets/gallery/JNVMednipur/4.jpg";
import Med5 from "../assets/gallery/JNVMednipur/5.jpg";
import Med6 from "../assets/gallery/JNVMednipur/6.jpg";
import Med7 from "../assets/gallery/JNVMednipur/7.jpg";
import Med8 from "../assets/gallery/JNVMednipur/8.jpg";
import Med9 from "../assets/gallery/JNVMednipur/9.jpg";
import Med10 from "../assets/gallery/JNVMednipur/10.jpg";

import rothak1 from "../assets/gallery/JNVRothak/1.jpg";
import rothak2 from "../assets/gallery/JNVRothak/2.jpg";
import rothak3 from "../assets/gallery/JNVRothak/3.jpg";
import rothak4 from "../assets/gallery/JNVRothak/4.jpg";
import rothak5 from "../assets/gallery/JNVRothak/5.jpg";
import rothak6 from "../assets/gallery/JNVRothak/6.jpg";
import rothak7 from "../assets/gallery/JNVRothak/7.jpg";
import rothak8 from "../assets/gallery/JNVRothak/8.jpg";
import rothak9 from "../assets/gallery/JNVRothak/9.jpg";
import rothak10 from "../assets/gallery/JNVRothak/10.jpg";
import rothak11 from "../assets/gallery/JNVRothak/11.jpg";
import rothak12 from "../assets/gallery/JNVRothak/12.jpg";

import kk1 from "../assets/gallery/KK/1.jpg";
import kk2 from "../assets/gallery/KK/2.jpg";
import kk3 from "../assets/gallery/KK/3.jpg";
import kk4 from "../assets/gallery/KK/4.jpg";
import kk5 from "../assets/gallery/KK/5.jpg";
import kk6 from "../assets/gallery/KK/6.jpg";
import kk7 from "../assets/gallery/KK/7.jpg";
import kk8 from "../assets/gallery/KK/8.jpg";
import kk9 from "../assets/gallery/KK/9.jpg";
import kk10 from "../assets/gallery/KK/10.jpg";

const schoolImages = {
  JNVAnini: [
    anini1,
    anini2,
    anini3,
    anini4,
    anini5,
    anini6,
    anini7,
    anini8,
    anini9,
    anini10,
  ],
  JNVAnjaw: [
    anjaw1,
    anjaw2,
    anjaw3,
    anjaw4,
    anjaw5,
    anjaw6,
    anjaw7,
    anjaw8,
    anjaw9,
    anjaw10,
  ],
  JnvKokrajhar: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10],
  JnvRothak: [
    rothak1,
    rothak2,
    rothak3,
    rothak4,
    rothak5,
    rothak6,
    rothak7,
    rothak8,
    rothak9,
    rothak10,
    rothak11,
    rothak12,
  ],
  JnvMednipur: [Med1, Med2, Med3, Med4, Med5, Med6, Med7, Med8, Med9, Med10],
  KKCollege: [kk1, kk2, kk3, kk4, kk5, kk6, kk7, kk8, kk9, kk10],
};

const schoolNames = {
  JNVAnini: "JNV Anini",
  JNVAnjaw: "JNV Anjaw",
  JnvKokrajhar: "JNV Kokrajhar",
  JnvRothak: "JNV Rothak",
  JnvMednipur: "JNV Mednipur",
  KKCollege: "KK College",
};

function SchoolGallery() {
  const { schoolId } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const images = schoolImages[schoolId] || [];
  const schoolName = schoolNames[schoolId] || schoolId;

  const openLightbox = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction) => {
    const newIndex = selectedImage + direction;
    if (newIndex >= 0 && newIndex < images.length) {
      setSelectedImage(newIndex);
    }
  };

  const handleKeyDown = (e) => {
    if (selectedImage === null) return;

    if (e.key === "Escape") {
      closeLightbox();
    } else if (e.key === "ArrowLeft") {
      navigateImage(-1);
    } else if (e.key === "ArrowRight") {
      navigateImage(1);
    }
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#050C2A] to-[#0D1B42] text-white p-4 md:p-10"
      onKeyDown={handleKeyDown}
      tabIndex="0"
    >
      <div className="container mx-auto px-2 md:px-4 py-10 md:py-20">
        <h1 className="text-3xl font-bold mb-2 md:mb-6 text-center bg-gradient-to-r from-white via-cyan-400 to-purple-400 text-transparent bg-clip-text">
          {schoolName} Gallery
        </h1>

        <div className="max-h-[80vh] overflow-y-auto pr-2 pb-10 custom-scrollbar">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((url, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-w-4 aspect-h-3 bg-gray-800">
                  <img
                    src={url || "/placeholder.svg"}
                    alt={`${schoolName} ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-3 w-full">
                    <p className="text-white text-sm">Image {index + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/80 transition-colors"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/50 hover:bg-black/80 transition-colors"
            onClick={() => navigateImage(-1)}
            disabled={selectedImage === 0}
          >
            <ChevronLeft size={24} />
          </button>

          <div className="w-full max-w-5xl max-h-[90vh] flex items-center justify-center">
            <img
              src={images[selectedImage] || "/placeholder.svg"}
              alt={`${schoolName} ${selectedImage + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/50 hover:bg-black/80 transition-colors"
            onClick={() => navigateImage(1)}
            disabled={selectedImage === images.length - 1}
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        .aspect-w-4 {
          position: relative;
          padding-bottom: 75%;
        }
        .aspect-w-4 > img {
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          object-fit: cover;
          object-position: center;
        }
      `}</style>
    </div>
  );
}

export default SchoolGallery;
