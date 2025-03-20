const x = 5;
const y = 7;
const z = 5 + 7;
console.log(z);

const A = "Hello ";
const B = "world!";
const C = A + B;
console.log(C);

function SumNPrint(x1, x2) {
    const x3 = x1 + x2;
    console.log(x3);
}

SumNPrint(x, y);
SumNPrint(A, B);

if (C.length > z) {
    console.log(C);
}
else if (C.length < z) {
    console.log(z);
}
else {
    console.log("good job!");
}

const L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
const L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// function findTheBanana(L) {
//     for (let i = 0; i < L.length; i++) {
//         if (L[i] === "Banana") {
//             alert("found the Banana in " + i);
//         }
//     }
// }

// findTheBanana(L1);
// findTheBanana(L2);

// function findTheBanana(fruit, index) {
//     if (fruit === "Banana") {
//         alert("We found a banana at " + index);
//     }
// }

// L1.forEach(findTheBanana);
// L2.forEach(findTheBanana);

function greetingFunc(){
    const d = new Date();
    const h = d.getHours();
    if (window.location.href.includes("index.html")) {
        const E = document.getElementById("greeting");
    
        if ((0 < h && h < 5) || (20 < h && h < 24)) {
            E.innerHTML = "Good night";
        }
        else if (h < 12) {
            E.innerHTML = "Good morning";
        }
        else if (12 < h && h < 18) {
            E.innerHTML = "Good afternoon";
        }
        else if (18 < h && h < 20) {
            E.innerHTML = "Good evening";
        }
        E.innerHTML += ", I am Alice Zhang";
    }
}

greetingFunc();

function addYear() {
    const date = new Date();
    const year = date.getFullYear();
    const E = document.getElementById("copyYear");
    E.innerHTML = "designed and coded by Alice Zhang &copy; " + year;
}

// function showList() {
//     document.getElementById("favlist").style.display = "block";
//     document.getElementById("see-more-button").style.display = "none";
// }

$(document).ready(function () {
    $("#read-more-btn").click(function(){
        $("#read-more-btn").hide();
        $("#long-intro").show();
        $("#read-less-btn").show();
    });
      
    $("#read-less-btn").click(function(){
        $("#read-more-btn").show();
        $("#long-intro").hide();
        $("#read-less-btn").hide();
    });
});

function validate() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const comment = document.getElementById("comment");
    if (!name.checkValidity() || !email.checkValidity() || !comment.checkValidity()) {
      document.getElementById("validation-msg").innerHTML = "Please fill out all fields correctly.";
    }
    else {
      document.getElementById("validation-msg").innerHTML = "";
    }
}

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(advice => {
            document.getElementById("adviceText").innerText = advice.slip.advice;
        })
        .catch(error => {
            document.getElementById("adviceText").innerText = "Something went wrong!";
            console.error("Error:", error);
        });
}

