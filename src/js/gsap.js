const myText = new SplitType('#hero')

gsap.to('.char', {
  y: 0,
  stagger: 0.05,
  delay: 0.2,
  duration: .1
})

gsap.registerPlugin(ScrollTrigger);

gsap.to("#card-1", {
  scrollTrigger: {
    trigger: "#card-1",
    toggleActions: "restart pause reverse pause",
    scrub: 1,
  },
  y: -100,
  ease: "none",
  duration: 3
});

gsap.to("#card-2", {
  scrollTrigger: {
    trigger: "#card-2",
    toggleActions: "restart pause reverse pause",
    scrub: 1,
  },
  y: -200,
  ease: "none",
  duration: 3
});

gsap.to("#card-3", {
  scrollTrigger: {
    trigger: "#card-3",
    toggleActions: "restart pause reverse pause",
    scrub: 1,
  },
  y: -300,
  ease: "none",
  duration: 3
});

// For text reveal
const splitTypes = document.querySelectorAll('.reveal-type')

splitTypes.forEach((char, i) => {

  const bg = char.dataset.bgColor
  const fg = char.dataset.fgColor

  const text = new SplitType(char, { types: 'chars' })

  gsap.fromTo(text.chars,
    {
      color: bg,
    },
    {
      color: fg,
      duration: 0.3,
      stagger: 0.02,
      scrollTrigger: {
        trigger: char,
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
        markers: false,
        toggleActions: 'play play reverse reverse'
      }
    })
})