function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    }

}
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("you must allow the request for geolocation to fill")
            location.reload();
            // getLocation()
            break;
    }
}
function showPosition(position) {
    var val1 = document.querySelector('.myForm input[name = "latitude"]').value = position.coords.latitude;
    var val2 = document.querySelector('.myForm input[name = "longitude"]').value = position.coords.longitude;
    console.log(val1, val2)
}
var formz = document.getElementById("submit");
formz.addEventListener("submit", function (event) {
    event.preventDefault();
    var x = document.getElementById("name").value;
    var y = document.getElementById("latitude").value;
    var z = document.getElementById("longitude").value;
    var a = document.getElementById("email").value;
    var b = document.getElementById("Address").value;
    var c = document.getElementById("mobile").value;
    var d = document.getElementById("Password").value;

    if (x === "" || x === null && y === "" || y === null && z === "" || z === null && a === "" || a === null && b === "" || b === null
        && c === "" || c === null && d === "" || d === null) {
        alert("Name must be filled out");
    }
    else {
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data)
        var listdata = data
        var arraylist = JSON.parse(localStorage.getItem('gisdata') || '[]');
        arraylist.push(listdata)
        localStorage.setItem('gisdata', JSON.stringify(arraylist));
        formz.reset();
        getLocation();
        alert("success")
    }
});

//login 

localStorage.setItem('name', "raunak@123");
localStorage.setItem('pw', "1234");
var storedName = localStorage.getItem('name');
var storedPw = localStorage.getItem('pw');
var formz1 = document.getElementById("Csubmit");
formz1.addEventListener("submit", function (event) {
    event.preventDefault();
    var a1 = document.getElementById("uemail").value;
    var b1 = document.getElementById("uPassword").value;
    if (a1 !== storedName || b1 !== storedPw) {
        alert('ERROR');
    } else {
        alert('You are loged in success !');
        window.location.href = 'table.html'
        formz.reset();
        getLocation();
    }
});





// toggle

function loginform() {
    var Cform = document.getElementById("Csubmit")
    var submit = document.getElementById("submit")
    var Cbtn = document.getElementById("Cbtn")
    var Ubtn = document.getElementById("Ubtn")
    if (Cform.style.display === "none" && submit.style.display === "block" && Cbtn.style.display === "block" && Ubtn.style.display === "none") {
        Cform.style.display = "block"
        submit.style.display = "none"
        Cbtn.style.display = "none"
        Ubtn.style.display = "block"
    } else {
        Cform.style.display = "none"
        submit.style.display = "block"
        Cbtn.style.display = "block"
        Ubtn.style.display = "none"
    }
}
function userform() {
    var Cform = document.getElementById("Csubmit")
    var submit = document.getElementById("submit")
    var Cbtn = document.getElementById("Cbtn")
    var Ubtn = document.getElementById("Ubtn")
    if (Cform.style.display === "block" && submit.style.display === "none" && Cbtn.style.display === "none" && Ubtn.style.display === "block") {
        Cform.style.display = "none"
        submit.style.display = "block"
        Cbtn.style.display = "block"
        Ubtn.style.display = "none"
    } else {
        Cform.style.display = "block"
        submit.style.display = "none"
        Cbtn.style.display = "none"
        Ubtn.style.display = "block"
    }
}