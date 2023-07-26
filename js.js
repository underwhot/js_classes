"use strict";

class Card {
  constructor(imgSrc, imgAlt, price, oldPrice, type, title, parent) {
    this.imgSrc = imgSrc;
    this.imgAlt = imgAlt;
    this.price = price;
    this.oldPrice = oldPrice;
    this.type = type;
    this.title = title;
    this.sale = Math.round((this.price / this.oldPrice) * 100) - 100;
    this.parent = parent;
  }
  render() {
    document.querySelector(this.parent).insertAdjacentHTML(
      "beforeend",
      `
    <div class="card">
      <img class="card__img" src="${this.imgSrc}" alt="${this.imgAlt}" />
      <div class="card__sale">${this.sale}%</div>
      <div class="card__price">
        ${this.price}р<span class="card__old-Price"> <s>${this.oldPrice}р</s> </span>
      </div>
      <div class="card__type">${this.type}</div>
      <div class="card__descr">${this.title}</div>
    </div>
    `
    );
  }
}

// const copyOfCard = new Card(
//   "./img/tv-1.png",
//   "tv",
//   "23900",
//   "29900",
//   "Старая модель",
//   "Старый Samsung UX-200-2300-55",
//   ".cards"
// );

// copyOfCard.render();

document.querySelector(".btn").addEventListener("click", () => {
  for (let i = 0; i < 3; i++) {
    new Card(
      `./img/tv-${i + 1}.png`,
      "tv",
      "23900",
      "29900",
      "Старая модель",
      "Старый Samsung UX-200-2300-55",
      ".cards"
    ).render();
  }
});
