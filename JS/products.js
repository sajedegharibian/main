"use strict";

const secEl = document.querySelector(".product");

async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    data?.map((item) => {
      secEl.innerHTML += `<div class="pro-item"><div class="card"><h5>${item.title}</h5><p>${item.price}</p></div></div>`;
    });
  } catch (error) {
    console.log(error);
  }
};
