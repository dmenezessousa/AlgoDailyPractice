function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a,b)=> a - b);
  blueShirtHeights.sort((a,b)=> a -b);
// Write your code here.

let blueBack = true;
let redBack = true;


for(let i = 0; i < redShirtHeights.length; i++){
  if(redShirtHeights[i] <= blueShirtHeights[i]){
    redBack = false
  }
  
  if(redShirtHeights[i] >= blueShirtHeights[i]){
      blueBack = false
  }
}

return blueBack || redBack;
}

// Do not edit the line below.
exports.classPhotos = classPhotos;