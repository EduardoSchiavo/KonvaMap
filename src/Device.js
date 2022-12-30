// import logo from './logo.svg';
import domotz from './domotz_d.jpg'
import useImage from 'use-image';
import { Image } from 'react-konva';




const Device = ({x, y}) => {
    const [image] = useImage(domotz);
    return <Image x={x} y={y} draggable image={image} />;
  };


export default Device;