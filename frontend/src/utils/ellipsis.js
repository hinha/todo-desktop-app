export const ellipsisText = (width, text = "", size = 46) => {
  const minWidth = width / 4 - size;
  let max = minWidth;
  return text.length > max ? text.substring(0, max - 3) + "..." : text;
};
