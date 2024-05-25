onclick = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

    var audio = document.getElementById('song');
    audio.play();

    var p= document.getElementById("p");;

    p.style.display= "none";

};