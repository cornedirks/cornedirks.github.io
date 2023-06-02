gsap.from(".main_left", {
  x: 20,
  opacity: 1,
  duration: 1,
  smooth: 1,
  opacity: 0,
});

gsap.from(".main_line", {
  y: -20,
  opacity: 1,
  duration: 1,
  smooth: 1,
});

gsap.from(".main_right", {
  x: -20,
  opacity: 1,
  duration: 1,
  smooth: 1,
  opacity: 0,
});

gsap.from("header h1", {
  scale: 1.1,
  opacity: 0,
  duration: 1,
  smooth: 1,
});

// gsap.from(".extra_socials_cards", {
//   y: -10,
//   scale: 0.9,
//   opacity: 0,
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

LottieInteractivity.create({
  player: "#firstLottie",
  mode: "scroll",
  actions: [
    {
      visibility: [0, 100],
      type: "seek",
      pin: true,
      frames: [0, 4000],
    },
  ],
});

VANTA.WAVES({
  el: "#header_background",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x141414,
  shininess: 20.0,
  waveHeight: 23.5,
  waveSpeed: 0.5,
});
