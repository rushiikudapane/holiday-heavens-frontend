// import React from "react";
// import "./pattern.css";
// const PhotoGrid = ({ currentDestination }) => {
//   const set1Images = currentDestination.set1Images;
//   const set2Images = currentDestination.set2Images;
//   const set3Images = currentDestination.set3Images;
//   const set4Images = currentDestination.set4Images;

//   return (
//     <div>
//       <div className="container grid grid-cols-2 gap-4 md:grid-cols-4 px-2 py-2 bg-blue-50 rounded-lg border-2 border-cyan-900">
//         <div className="grid gap-4">
//           {set1Images.map((data, index) => (
//             <div>
//               <a href={data}>
//                 <img
//                   className="h-auto max-w-full rounded-lg object-cover object-center"
//                   src={data}
//                   key={index}
//                   value={index}
//                   alt="gallery-photo"
//                 />
//               </a>
//             </div>
//           ))}
//         </div>
//         <div className="grid gap-4">
//           {set2Images.map((data, index) => (
//             <div>
//               <a href={data}>
//                 <img
//                   className="h-auto max-w-full rounded-lg object-cover object-center"
//                   src={data}
//                   key={index}
//                   value={index}
//                   alt="gallery-photo"
//                 />
//               </a>
//             </div>
//           ))}
//         </div>
//         <div className="grid gap-4">
//           {set3Images.map((data, index) => (
//             <div>
//               <a href={data}>
//                 <img
//                   className="h-auto max-w-full rounded-lg object-cover object-center"
//                   src={data}
//                   key={index}
//                   value={index}
//                   alt="gallery-photo"
//                 />
//               </a>
//             </div>
//           ))}
//         </div>
//         <div className="grid gap-4">
//           {set4Images.map((data, index) => (
//             <div>
//               <a href={data}>
//                 <img
//                   className="h-auto max-w-full rounded-lg object-cover object-center"
//                   src={data}
//                   key={index}
//                   value={index}
//                   alt="gallery-photo"
//                 />
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PhotoGrid;

import React, { useState } from "react";
import "./pattern.css";

const PhotoGrid = ({ currentDestination }) => {
  const [showFullImage, setShowFullImage] = useState(false);
  const [fullImageIndex, setFullImageIndex] = useState(0);

  const allImages = [
    ...currentDestination.set1Images,
    ...currentDestination.set2Images,
    ...currentDestination.set3Images,
    ...currentDestination.set4Images,
  ];

  const totalImages = allImages.length;

  const handleImageClick = (index) => {
    setFullImageIndex(index);
    setShowFullImage(true);
  };

  const handlePreviousClick = () => {
    setFullImageIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setFullImageIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  };

  const handleCloseClick = () => {
    setShowFullImage(false);
  };

  return (
    <div>
      <div className="container grid grid-cols-2 gap-4 md:grid-cols-4 px-2 py-2 bg-blue-50 rounded-lg border-2 border-cyan-900">
        {allImages.map((data, index) => (
          <div key={index}>
            <a href="#" onClick={() => handleImageClick(index)}>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center cursor-pointer"
                src={data}
                alt="gallery-photo"
              />
            </a>
          </div>
        ))}
      </div>

      {showFullImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
          <div className="max-w-screen-lg w-full">
            <div className="relative">
              <button
                className="absolute top-0 right-0 m-6 px-2 rounded-full text-black text-2xl bg-gray-500"
                onClick={handleCloseClick}
              >
                &times;
              </button>
              <img
                src={allImages[fullImageIndex]}
                alt="Full size"
                className="max-w-full max-h-full"
              />
              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 border-2 border-cyan-900 bg-cyan-700 text-white rounded-full p-2 shadow-md"
                onClick={handlePreviousClick}
              >
                &lt;&lt;
              </button>
              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 border-2 border-cyan-900 bg-cyan-700 text-white rounded-full p-2 shadow-md"
                onClick={handleNextClick}
              >
                &gt;&gt;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGrid;
