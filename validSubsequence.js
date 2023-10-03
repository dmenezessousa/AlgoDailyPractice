function isValidSubsequence(array, sequence) {
  // Write your code here.
let seqIdx = 0;
  for(let num of array){
    if(seqIdx === sequence.length){
      break;
    }
    if(sequence[seqIdx] === num){
      seqIdx++
    }
      
  }
  return seqIdx === sequence.length
}