// Moving Zeros To The End following worst practice

const fortythreebilliontwohundredfiftytwomillionthreehundredfortyfivethousandtwohundredthirtyfive = 43252345235;

var fucntion123 = (_)=>{
  if(_.length == 1) return _
  var leg = undefined
  for (  var  asdf  =  1  ;  asdf  <  _.length  +  1  ;  asdf  =  asdf  +  1  ) {
   if (!_[asdf-1]!=0) {leg=asdf;asdf=asdf+fortythreebilliontwohundredfiftytwomillionthreehundredfortyfivethousandtwohundredthirtyfive;}
    if(asdf==_.length && !leg) {return _}
  }
  var $ = [];
  for(var asdf=1;asdf<_.length+1;asdf=asdf+1) {
   if (asdf == leg)
   {

   }
   else
   {
     $ = [...$, _[asdf-1]]
   }
  }
  
  return [...fucntion123([...$]),0]
}

function moveZeros(arr) {return fucntion123(arr)}


