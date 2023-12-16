import { useState } from "react";
import group30SVG from "../../common/images/group30.svg";
import group31SVG from "../../common/images/group31.svg";
import { Wrap, MainImage, PopupImage } from "./styled";

const ImagePopup = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupImage, setPopupImage] = useState('');

  const togglePopup = (imageSrc) => {
    if (popupVisible) {
      setPopupVisible(false);
    } else {
      setPopupImage(imageSrc);
      setPopupVisible(true);
    }
  };

  return (
    <Wrap>
        {popupVisible && (
        <div onClick={() => togglePopup('')}>
          <PopupImage src={popupImage} alt="Popup" />
        </div>
      )}
      <MainImage
        src={group30SVG}
        alt="Picture"
        onClick={() => togglePopup(group31SVG)}
      />
    </Wrap>
  );
};

export default ImagePopup;
