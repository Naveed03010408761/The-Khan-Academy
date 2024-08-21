let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    const offset = -slideIndex * 100;
    document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;
}

function moveSlide(n) {
    showSlide(slideIndex + n);
}


showSlide(slideIndex);


setInterval(() => moveSlide(1), 5000);

let btn = document.querySelector(".icon");
btn.addEventListener("click",()=>{
    const search = document.getElementById("search").value.toLowerCase();
    if(search === ""){
        alert("please enter something!");
    }
     else if(search === "about"){
        window.location.href = "about.html";
    }
    else if(search === "academic"){
        window.location.href = "academic.html";
    }
    else if(search === "admission"){
        window.location.href = "admission.html";
    }
    else if(search === "contact"){
        window.location.href = "contact.html";
    }
   else{
    let div = document.createElement("div");
    div.className = "div";
    div.innerText = "Page not available";
    document.body.appendChild(div);
    let button = document.createElement("button");
    button.className = "button";
    button.innerHTML = "<i class='fa-solid fa-arrow-left'></i>";
    div.appendChild(button);
    button.addEventListener("click",()=>{
    window.location.href = "school.html";
    })
   }
})

let submit = document.getElementById("submit");

submit.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Capture form data
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let bio = document.getElementById("bio").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let agree = document.querySelector('input[name="agree"]').checked;

    // Display or process the captured data
    if (agree) {
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password); // Be cautious with passwords in real apps
        console.log("Biography:", bio);
        console.log("Gender:", gender);

        // You can display the data on the page
        let formPage = document.createElement("div");
        formPage.className = "formPage";

        formPage.innerHTML = `
            <h3>Submitted Data:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Password:</strong> ${password}</p>
            <p><strong>Biography:</strong> ${bio}</p>
            <p><strong>Gender:</strong> ${gender}</p>
        `;

        document.body.appendChild(formPage);
    } else {
        alert("You must agree to the terms and conditions.");
    }
});



