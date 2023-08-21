export const getNumberFromPixel = (pixel: string): number => {
  return Number(pixel.replace("px", ""));
};
