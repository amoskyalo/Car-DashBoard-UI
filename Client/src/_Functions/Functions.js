export const handleClickOutside = (callbackFn) => {
  document.addEventListener("click", callbackFn);

  return () => document.removeEventListener("click", callbackFn);
};

export const truncateText = (text, num) => {
  if (text.length > num) {
    return text.slice(0, num) + "...";
  }
  return text;
};
