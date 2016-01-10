//Assume you are provied function that generate number between 1 ~ 5
//How to use that function to generate number between 1 ~ 7


function rand5() {
   return 1 + Math.random() * 4;
}

//Idea: 5 + function to generate number between 1 ~ 2
function rand7() {
  return 5 + rand5() / 5 * 2;
}
