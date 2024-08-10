import {getImageUrl} from "../utils";
import { useContext } from "react";
import ImagesizeContext from "../context/context";

function PlaceImage({ place }) {
  const imageSize = useContext(ImagesizeContext);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}

export default PlaceImage;
