function minimumWaitingTime(queries) {
  // Write your code here.
  if(queries.length === 1) return 0
  queries.sort((a,b)=> a - b).pop();
  return queries.reduce((acc, toAdd, idx) => acc + toAdd * (queries.length - idx), 0);
}

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;
