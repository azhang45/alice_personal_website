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

function findTheBanana(L) {
    for (let i = 0; i < L.length; i++) {
        if (L[i] === "Banana") {
            alert("found the Banana in " + i);
        }
    }
}

findTheBanana(L1);
findTheBanana(L2);

function findTheBanana(fruit) {
    if (fruit === "Banana") {
        alert("We found a banana in the first array");
    }
}

L1.forEach(findTheBanana);
L2.forEach(findTheBanana);

function greetingFunc(){
    const d = new Date();
    const h = d.getHours();
    // if (window.location.href.includes("index.html"))
    if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
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

