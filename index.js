function theBeatlesPlay(musicians, instruments){
  var sentences = [];
  for (let i = 0; i < musicians.length; i++){
    sentences.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return sentences;
}

function johnLennonFacts(facts){
  var superFacts = [];
  var i = 0;
  while (i < facts.length){
    superFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return superFacts;
}