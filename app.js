var lightOn = document.getElementById("bulb");
lightOn.addEventListener('click', function(e){
    e.target.classList.toggle('bulb-on');

});