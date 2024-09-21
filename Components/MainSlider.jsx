import Context from "@/ContextApi/context";
import React, { useContext } from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
// use context Api 1/create folder and create context.js
// 2/ezafe kardan data be context ba provider
// 3/dastresi be dataye context ba useContext
const MainSlider = () => {
  const { MainSliderImage } = useContext(Context);
  return (
    <div>
      <ReactImageGallery
        items={MainSliderImage} // liste img haii ke slider neshan midahad
        autoPlay={true}
        slideInterval={3000}
        lazyLoad={true}
        showFullscreenButton={false}
        isRTL={true}
        showThumbnails={false}
        showPlayButton={false}
        showBullets={true}
        href={MainSliderImage.url}
      />
    </div>
  );
};

export default MainSlider;

// baraye inke server side image ha ro beirim bayad toye page estefadeh konim na toye camponent
// baraye hamin jaii ke estefade mishe mesle index.js bayad get e serverside bezanim
