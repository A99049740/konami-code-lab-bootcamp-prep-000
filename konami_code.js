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
  document.addEventListener('click',function(e){
    alert("sfds")
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