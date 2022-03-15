export function smartString(
    phrase: string,
    num: number
  ) {
    
        let subString, restString, proxSpace, subString2;

        if(phrase.length > num){
            subString = phrase.substring(0, num)

            restString = phrase.substring(num)
            proxSpace = restString.search(' ')
            subString2 = restString.substring(0, proxSpace+1)
            
            return subString + subString2 + "..."
        }else{ 
            return phrase 
        }
    
  }