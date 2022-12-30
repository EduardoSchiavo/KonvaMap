
import map from './map.png'
import useImage from 'use-image';
import { Image } from 'react-konva';


const Map = () => {
    const [image] = useImage(map);
    return <Image  image={image} />;
  };


export default Map;