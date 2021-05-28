const quotes = [
    {
      "quote": "Strive not to be a success, but rather to be of value.",
      "author": "Albert Einstein"
    },
    {
      "quote": "You miss 100% of the shots you don’t take.",
      "author": "Wayne Gretzky"
    },
    {
      "quote": "I attribute my success to this: I never gave or took any excuse.",
      "author": "Florence Nightingale"
    },
    {
      "quote": "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
      "author": "Michael Jordan"
    }
  ]
  
  
  //TODO: complete this function so that it returns all quote objects whose quote text includes the given searchTerm.
  //TODO: bonus points if it works even if the letter case is different (e.g. a search for 'strive' also matches 'Strive')
  function findQuotesMatching(quotes, searchTerm){
    //TODO: you must complete this function
    const result = quotes.filter((each)=>{
        if (each.quote.includes(searchTerm.toLowerCase())){
            return each.quote
        } 
    })
        return result
  }
  
  let results1 = findQuotesMatching(quotes, "MISS");
  console.log("Quotes mentioning 'miss': ", results1);  //expecting 2
  
  let results2 = findQuotesMatching(quotes, "success");
  console.log("Quotes mentioning 'success': ", results2); //expecting 2