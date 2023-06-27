gsap.registerPlugin(ScrollTrigger);

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

const commission_ani = gsap.fromTo(".commission_status", { opacity: 0, y: "100%" }, { opacity: 1, y: 0 });

ScrollTrigger.create({
  trigger: "#commission_status_section",
  start: "top 80%",
  onEnter: () => {
    commission_ani.play();
  },
  onLeaveBack: () => {
    commission_ani.reverse();
  },
});

const why_section_ani = gsap.fromTo(".why_section_card", { opacity: 0, y: "100%" }, { opacity: 1, y: 0 });

ScrollTrigger.create({
  trigger: "#why_section",
  start: "top 80%",
  onEnter: () => {
    why_section_ani.play();
  },
  onLeaveBack: () => {
    why_section_ani.reverse();
  },
});


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