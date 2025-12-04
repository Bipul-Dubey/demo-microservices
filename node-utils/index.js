function getCurrentTime() {
  return new Date().toISOString();
}

function getRandomThree(arr) {
  return arr.sort(() => 0.5 - Math.random()).slice(0, 3);
}

module.exports = {
  getCurrentTime,
  getRandomThree,
};
