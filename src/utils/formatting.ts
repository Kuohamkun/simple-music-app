export const formatTime = (duration: number) => {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration % 60);
  return `${minutes}:${duration < 10 ? "0" : ""}${seconds}`;
};
