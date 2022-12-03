import { Stage, Layer, Circle } from 'react-konva';
import Devices from './Devices';

export const App = () => {
  return (
    // Stage - is a div wrapper
    // Layer - is an actual 2d canvas element, so you can have several layers inside the stage
    // Rect and Circle are not DOM elements. They are 2d shapes on canvas
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Devices />
      </Layer>
    </Stage>
  );
}

export default App;