import { Stage, Layer, Image, Circle } from 'react-konva';
import logo from './logo.svg'
import React from 'react';
import useImage from 'use-image';


function generateShapes() {
    return [...Array(10)].map((_, i) => ({
      id: i.toString(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      rotation: Math.random() * 180,
      isDragging: false,
    }));
  }
  
const INITIAL_STATE = generateShapes();
  

const Devices = () => {
    const [images, setImages] = React.useState(INITIAL_STATE);
    const [myimage] = useImage('./logo.svg')
    return (<>
        {images.map((images)=>(<Image
        image= {myimage}
        />))}
    </>);
  
    }
  export default Devices;