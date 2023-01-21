import "./main.scss";

class App {
  constructor() {
    this.shareButton = document.querySelector("#btn-share");
    this.article = document.querySelector("#article");
    this.container = document.querySelector(".social-network__container");
  }

  addEventListeners() {
    this.shareButton.addEventListener("click", (e) => this.togglePopup());
    document.addEventListener("click", (e) => this.closePopup(e));
  }

  togglePopup() {
    this.article.classList.toggle("social-networks");
  }

  closePopup(e) {
    const el = e.target;

    if (
      el === this.container ||
      this.container.contains(el) ||
      this.shareButton === el ||
      this.shareButton.contains(el)
    ) {
      return;
    }

    this.article.classList.remove("social-networks");
  }

  init() {
    this.addEventListeners();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new App();

  app.init();
});

//
// const init = () => {
//   document.getElementById("btn-share").addEventListener("click", showModal);
//   document.addEventListener("click", closeModals);
//
//   const article = document.getElementById("article");
//

//   const closeModals = (e) => {

//     const container = document.querySelector(".social-network__container");
//     const btn = document.getElementById("btn-share");
//     const shareBtn = document.getElementById("article");
//     const el = e.target;
//
//     if (
//       el === container ||
//       container.contains(el) ||
//       btn === el ||
//       btn.contains(el)
//     ) {
//       return;
//     }
//
//     shareBtn.classList.remove("social-networks");
//   };
//
//   const showModal = () => {
//     article.classList.toggle("social-networks");
//   };
// };
