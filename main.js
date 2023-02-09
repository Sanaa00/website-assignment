const cards = [
  {
    id: 1,
    name: "Emma Watson",
    img: "https://i.pinimg.com/originals/2e/41/e7/2e41e7e87fdf0ec381a723c2409c4782.jpg",
  },
  {
    id: 2,
    name: "Daniel Radcliffe",
    img: "https://wallpapercave.com/wp/mAojpeA.jpg",
  },
  {
    id: 3,
    name: "Rupert Grint",
    img: "https://media.glamour.com/photos/6001fa6475ba02d6bf035bd3/1:1/w_2504,h_2504,c_limit/Rupert-Grint-Servant-Dad-hot.jpg",
  },
  {
    id: 4,
    name: "Tom Felton",
    img: "https://wallpapercave.com/wp/wp4954117.jpg",
  },
];
const cardsContainer = document.querySelector(".cards");
// const img = document.querySelector("#img-card");
// const namess = document.querySelector("#names");
cards.forEach(function (cardData) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card");
  const img = document.createElement("img");
  img.classList.add("card-img");
  img.setAttribute("src", `${cardData.img}`);

  const p = document.createElement("p");
  p.classList.add("name");
  p.textContent = `${cardData.name}`;
  cardContainer.appendChild(img);
  cardContainer.appendChild(p);

  cardsContainer.appendChild(cardContainer);
});
