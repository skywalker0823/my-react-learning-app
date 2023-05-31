const getContrast = (hexColor) => {
  hexColor = hexColor.replace("#", "");

  const r = parseInt(hexColor.substr(0, 2), 16);
  const g = parseInt(hexColor.substr(2, 2), 16);
  const b = parseInt(hexColor.substr(4, 2), 16);

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  const contrastColor = brightness > 128 ? "#000000" : "#FFFFFF";

  return contrastColor;
};

export default getContrast