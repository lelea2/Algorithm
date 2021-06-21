// All students wearing red shirts must be in the same row.
// All students wearing blue shirts must be in the same row.
// Each student in the back row must be strictly taller than the student
// directly in front of them in the front row.

function classPhotos(redShirtHeights, blueShirtHeights) {
  // sorting in descending order
  redShirtHeights.sort((a, b) => b - a);
  blueShirtHeights.sort((a, b) => b - a);

  const shirtColorFirstRow = redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : 'BLUE';
  for (let i = 0; i < redShirtHeights.length; i++) {
    const redShirtHeight = redShirtHeights[i];
    const blueShirtHeight = blueShirtHeights[i];
    if (shirtColorFirstRow === 'RED') {
      if (redShirtHeight >= blueShirtHeight) {
        return false;
      }
    } else if (blueShirtHeight >= redShirtHeight) {
      return false;
    }
  }
  return true;
}