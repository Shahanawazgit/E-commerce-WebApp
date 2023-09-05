// For Opening & Collapsing the Navbar in small devices
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const cross = document.getElementById("cross");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (cross) {
  cross.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// For redirecting to details page
const pro = document.querySelectorAll(".pro");

pro.forEach((card) => {
  card.addEventListener("click", () => {
    window.location.href = "singleProduct.html";
  });
});

// For Single Page Image Selection
const mainImg = document.getElementById("mainImg");
const smallImg = document.querySelectorAll(".small_img");

smallImg.forEach((Image) => {
  Image.onclick = () => (mainImg.src = Image.src);
});

// For generating random people in Contact page
const people = document.getElementById("people");

getData();
async function getData() {
  const res = await fetch("https://randomuser.me/api?results=4");

  const { results } = await res.json();

  results.forEach((user) => {
    const div = document.createElement("div");

    div.innerHTML = `<img src="${user.picture.large}" alt="${user.name.first}">
    <p><span>${user.name.first} ${user.name.last}</span>Senior Marketting Manager <br>Phone: ${user.cell} <br>Email: ${user.email}</p>`;

    people.appendChild(div);
  });
}
