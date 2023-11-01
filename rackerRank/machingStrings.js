function matchingStrings(strings, queries) {
  let result = [];
  // Iterate over the queries array
  for(let i=0; i<queries.length; i++){
      // Use the array filter function to find matching strings, and put the count in result
      result.push(strings.filter(string => string === queries[i]).length);
  }
  // Return the result array
  return result;
}
