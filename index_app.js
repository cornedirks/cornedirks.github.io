gsap.from(".main_left", {
  y: 10,
  opacity: 1,
  duration: 1,
  smooth: 1,
});

gsap.from(".main_line", {
  y: 10,
  opacity: 1,
  duration: 1,
  smooth: 1,
});

gsap.from(".main_right", {
  y: 10,
  opacity: 1,
  duration: 1,
  smooth: 1,
});

gsap.from("header h1", {
  scale: 1.1,
  opacity: 0,
  duration: 1,
  smooth: 1,
});

// gsap.from(".extra_socials_cards", {
//   y: 10,
//   opacity: 1,
//   duration: 1,
//   smooth: 1,
// });

const modal = document.querySelector(".commission_closed_modal");
const openModal = document.querySelector(".read_more_btn_commission_closed");
const closeModal = document.querySelector(".read_more_btn_close_modal");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});
