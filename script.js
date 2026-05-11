const music = document.getElementById("music");
const sound = document.getElementById("openSound");

function openGate(){
  document.getElementById("welcome").classList.add("hidden");
  document.getElementById("gate").classList.remove("hidden");
  music.play();
}

const secret = "ahmed";

function check(){
  let val = document.getElementById("pass").value;
  if(val === secret){
    startCountdown();
  } else {
    document.getElementById("error").innerText = "❌ كلمة السر غير صحيحة";
  }
}

function startCountdown(){
  document.getElementById("gate").classList.add("hidden");
  document.getElementById("count").classList.remove("hidden");

  let n = 3;
  let el = document.getElementById("num");

  let t = setInterval(()=>{
    n--;
    el.innerText = n;
    if(n === 0){
      clearInterval(t);
      showGift();
    }
  },1000);
}

function typeText(text, el, speed=60){
  let i=0;
  let interval = setInterval(()=>{
    el.innerHTML += text[i];
    i++;
    if(i>=text.length) clearInterval(interval);
  },speed);
}

function fireworks(){
  let box = document.getElementById("fireworks");
  for(let i=0;i<80;i++){
    let d = document.createElement("div");
    d.style.left = Math.random()*100+"%";
    d.style.top = Math.random()*100+"%";
    box.appendChild(d);
    setTimeout(()=>d.remove(),3000);
  }
}

function showGift(){
  document.getElementById("count").classList.add("hidden");
  document.getElementById("gift").classList.remove("hidden");

  sound.play();

  document.getElementById("title").innerText =
    "🎉 أهلاً بك يا أحمد غلاب 👑";

  typeText(
    "أحمد غلاب… هذا يومك الملكي. أنت قيمة كبيرة ومكانة لا تُقارن 🤍 كل عام وانت بخير وسعادة ونجاح دائم 👑",
    document.querySelector("#msg")
  );

  fireworks();
}