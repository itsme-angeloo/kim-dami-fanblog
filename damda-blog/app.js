$('input').on('change', function() {
  $('body').toggleClass('blue');
});




function showNav(){
    const curClass = document.getElementById('nav').className

    if(curClass == 'main-nav'){
        document.getElementById('nav').classList.add("visible");
        console.log(curClass)
    }else{
         document.getElementById('nav').classList.remove("visible");
         console.log(curClass)
    }
}