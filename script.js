var t=document.getElementById("toast"),timer;
document.querySelectorAll(".card").forEach(function(c){
  c.addEventListener("click",function(){
    t.textContent="Menu "+c.dataset.n+" segera hadir";
    t.classList.add("show");clearTimeout(timer);
    timer=setTimeout(function(){t.classList.remove("show")},2200);
  });
});