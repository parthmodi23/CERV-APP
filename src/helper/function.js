import { Dimensions } from 'react-native';

// Grab the window object from that native screen size.
const window = Dimensions.get('window');
const { width, height } = Dimensions.get('window');

// The vertical resolution of the screen.
// const screenHeight = window.height;
// The horizontal resolution of the screen.
// const screenWidth = window.width;
let screenHeight = width < height ? height : width;
let screenWidth = width < height ? width : height;

export const wp = (percentage) => {
    const value = (percentage * screenWidth) / 100;
    return Math.round(value);
};
//alert(screenHeight)
// The average resolution of common devices, based on a ~5" mobile screen.
const baselineHeight = screenHeight < 750 ? 680 : 800;

// Scales the item based on the screen height and baselineHeight
export const scale = value => Math.floor((screenHeight / baselineHeight) * value);

export default null;
