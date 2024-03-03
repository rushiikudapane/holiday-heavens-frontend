import React from "react";
import "./pattern.css";
const PhotoGrid = ({ currentDestination }) => {
  const set1Images = currentDestination.set1Images;
  const set2Images = currentDestination.set2Images;
  const set3Images = currentDestination.set3Images;
  const set4Images = currentDestination.set4Images;

  return (
    <div>
      <div className="container grid grid-cols-2 gap-4 md:grid-cols-4 px-2 py-2 bg-blue-50 rounded-lg border-2 border-cyan-900">
        <div className="grid gap-4">
          {set1Images.map((data, index) => (
            <div>
              <a href={data}>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src={data}
                  key={index}
                  value={index}
                  alt="gallery-photo"
                />
              </a>
            </div>
          ))}
        </div>
        <div className="grid gap-4">
          {set2Images.map((data, index) => (
            <div>
              <a href={data}>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src={data}
                  key={index}
                  value={index}
                  alt="gallery-photo"
                />
              </a>
            </div>
          ))}
        </div>
        <div className="grid gap-4">
          {set3Images.map((data, index) => (
            <div>
              <a href={data}>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src={data}
                  key={index}
                  value={index}
                  alt="gallery-photo"
                />
              </a>
            </div>
          ))}
        </div>
        <div className="grid gap-4">
          {set4Images.map((data, index) => (
            <div>
              <a href={data}>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src={data}
                  key={index}
                  value={index}
                  alt="gallery-photo"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGrid;
