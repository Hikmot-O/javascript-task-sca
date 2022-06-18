// complete the function
function prime (num) {
  // code goes here
  const arr = [];
    if(num === 1 || num === 2){
        arr.push(true);
    }else if(num <= 0){
        arr.push(false);    
    }
    else{
        for(let i=2; i<num; i++){
           if(num % i === 0){
               arr.push(false);
            }else if (num % i !== 0){
                arr.push(true);
            }
        }
    }
    if(arr.some(el => el === false)){
        console.log (false);
    }else{
        console.log (true);
    };
}

function solution (arg) {
  return prime(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
