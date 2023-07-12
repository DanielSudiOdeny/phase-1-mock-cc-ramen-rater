document.addEventListener("DOMContentLoaded", function () {
  getAllRamenImages();
});

const ramenMenu = document.getElementById("ramen-menu");
const detailImg = document.querySelector(".detail-image");
const mealName = document.querySelector(".name");
const restaurant = document.querySelector(".restaurant");
const rating = document.getElementById("rating-display");
const comment = document.getElementById("comment-display");
const newMealName = document.getElementById("new-name");
const newRestaurantName = document.getElementById("new-restaurant");
const newImage = document.getElementById("new-image");
const newRating = document.getElementById("new-rating");
const newComment = document.getElementById("new-comment");
const createNewRamen = document.getElementById("create");
const newRamenForm = document.querySelector("#new-ramen");

function getAllRamenImages() {
  fetch("http://localhost:3000/ramens")
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      data.forEach((data) => {
        console.log(data.image);
        const img = document.createElement("img");
        img.src = data.image;
        ramenMenu.appendChild(img);

        img.addEventListener("click", () => {
          console.log(detailImg.src);
          detailImg.src = data.image;
          mealName.textContent = data.name;
          restaurant.textContent = data.restaurant;
          rating.textContent = data.rating;
          comment.textContent = data.comment;
        });
      });
    });
}

newRamenForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const img2 = document.createElement("img");
  img2.src = newImage.value;
  ramenMenu.appendChild(img2);
});
