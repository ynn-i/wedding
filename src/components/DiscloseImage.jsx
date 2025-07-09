import React, { useState } from "react";

// Prevent Tailwind from purging custom animation classes
const _purgeTailwind = [
  "animate-slide-out-to-left-full",
  "animate-slide-out-to-right-full"
];

export default function DiscloseImage({ src, alt = "", className = "" }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-none">
      <img
        src={src}
        alt={alt}
        onLoad={() => setImageLoaded(true)}
        className={`w-full h-full object-cover ${className}`}
        draggable={false}
      />
      {imageLoaded && (
        <>
          {/* Left door */}
          <div
            className="ease-slow duration-mid absolute left-0 top-0 w-1/2 h-full bg-black/60 animate-slide-out-to-left-full"
            style={{ pointerEvents: "none" }}
          />
          {/* Right door */}
          <div
            className="ease-slow duration-mid absolute right-0 top-0 w-1/2 h-full bg-black/60 animate-slide-out-to-right-full"
            style={{ pointerEvents: "none" }}
          />
        </>
      )}
    </div>
  );
} 