const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

index =0;
function init() {
  // your code here
  document.body.addEventListener('keydown',function(e){
   console.log(e.which)
  })
}

function check(e){
  const key = e.key;
  alert(key)
  if (key === codes[index]){
    index++
    if (index === codes.length){
      alert()
      index =0
    }
  } else{
    index =0 
  }
}