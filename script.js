const form = document.getElementById("eciForm");


if(form){


form.addEventListener("submit", function(e){


e.preventDefault();


let data = new FormData(form);



fetch(
"https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec",
{

method:"POST",

body:data

}

)

.then(response=>response.text())

.then(result=>{


document.getElementById("response").innerHTML =
"Your inquiry has been submitted successfully!";


form.reset();


})

.catch(error=>{


document.getElementById("response").innerHTML =
"Error submitting form.";

});


});


}