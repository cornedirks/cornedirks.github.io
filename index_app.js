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

const commission_ani = gsap.fromTo(".commission_status", 
{ opacity: 0, y: "100%" }, 
{ opacity: 1, y: 0, paused: true });

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

gsap.from(".big_text_about_me", {
  x: "1000",
  opacity: 1,
  scrollTrigger: {
    trigger: "#big_text_container",
    start: "top 80%", 
    end: "bottom 50%",
    scrub: 3,
    smooth: 1,
  },
});

const about_me_ani = gsap.fromTo(
  ".more_about_me_long",
  { opacity: 0, x: "5%" },
  { opacity: 1, x: 0, paused: true }
);

ScrollTrigger.create({
  trigger: "#more_about_me_container",
  start: "top 60%",
  onEnter: () => {
    about_me_ani.play();
  },
  onLeaveBack: () => {
    about_me_ani.reverse();
  },
});

const hobbies_ani = gsap.fromTo(
  ".more_about_me_hobbies",
  { opacity: 0, x: "-5%" },
  { opacity: 1, x: 0, paused: true }
);

ScrollTrigger.create({
  trigger: "#more_about_me_container",
  start: "30% 60%",
  onEnter: () => {
    hobbies_ani.play();
  },
  onLeaveBack: () => {
    hobbies_ani.reverse();
  },

});

const skills_ani = gsap.fromTo(
  ".skills_container",
  { opacity: 0, y: "50%" },
  { opacity: 1, y: 0, paused: true }
);

ScrollTrigger.create({
  trigger: "#more_about_me_container",
  start: "65% 60%",
  onEnter: () => {
    skills_ani.play();
  },
  onLeaveBack: () => {
    skills_ani.reverse();
  },
});


const why_section_ani = gsap.fromTo(".why_section_card", 
{ opacity: 0, y: "100%" }, 
{ opacity: 1, y: 0, paused: true });

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