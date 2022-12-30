import { useEffect, useState } from 'react';
import { Stage, Layer} from 'react-konva';
import Device from './Device';
import Map from './Map';


export const DeviceMap = () => {
    const [windowHeight, setWindowHeight] =  useState(window.innerHeight);
    const [windowWidth, setWindowWidth] =  useState(window.innerWidth);

    const deviceList = [
        {x: 0, y: 0}, {x: 200, y: 300}, {x: 1000, y: 1000}, {x: 500, y: 20}
    ]

    // useEffect to prevent the render from creating n listeners
    useEffect(()=>{window.addEventListener('resize', (e)=>{
        setWindowHeight(window.innerHeight)
        setWindowWidth(window.innerWidth)
    })}, [])
    return (
    <Stage width={windowWidth} height={windowHeight}>
    <Layer><Map /></Layer>
    <Layer>
        {deviceList.map((val, i)=><Device x={val.x} y={val.y} key={i} />)}
    </Layer>
    </Stage>
    )
};

export default DeviceMap;