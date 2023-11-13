AOS.init();
var scriptURL = "https://script.google.com/macros/s/AKfycbwNn2rwi6hSL3y7355V3nyEiOhmhfnQzkKR88qOq6KrN5ZBvbcIxSGTlusBeoVn0I7I/exec";
var form = document.forms['google-sheet'];
form.addEventListener('submit',e=> {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST',body: new FormData(form)}).then(Response => alert("Thanks for Contacting us..! We will Contact You Soon... ")).catch(error => console.error('Error!',error.message))
});

//top-button
$("#top-button").click(function(){
    $("html, body").animate({scrollTop: 0},1000);
});
