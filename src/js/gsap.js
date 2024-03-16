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
  y: 100,
  ease: "none",
  duration: 3
});

gsap.to("#card-2", {
  scrollTrigger: {
    trigger: "#card-2",
    toggleActions: "restart pause reverse pause",
    scrub: 1,
  },
  y: 200,
  ease: "none",
  duration: 3
});

gsap.to("#card-3", {
  scrollTrigger: {
    trigger: "#card-3",
    toggleActions: "restart pause reverse pause",
    scrub: 1,
  },
  y: 300,
  ease: "none",
  duration: 3
});

gsap.to("#works-link", {
  scrollTrigger: {
    trigger: "#works-link",
    toggleActions: "restart pause reverse pause",
    scrub: 1,
  },
  y: -300,
  ease: "none",
  duration: 3
});

gsap.to("#hero", {
  scrollTrigger: {
    trigger: "#hero",
    toggleActions: "restart pause reverse pause",
    scrub: 1,
  },
  y: -150,
  ease: "none",
  duration: 3
});

gsap.to("#desc", {
  scrollTrigger: {
    trigger: "#desc",
    toggleActions: "restart pause reverse pause",
    scrub: 1,
  },
  y: -130,
  ease: "none",
  duration: 3
});

gsap.to("#section1-left", {
  scrollTrigger: {
    trigger: "#section1-left",
    toggleActions: "restart pause reverse pause",
    scrub: 1,
  },
  y: -150,
  ease: "none",
  duration: 3
});

gsap.to("#section1-right", {
  scrollTrigger: {
    trigger: "#section1-right",
    toggleActions: "restart pause reverse pause",
    scrub: 1,
  },
  y: -400,
  ease: "none",
  duration: 3
});

// For text reveal
const splitType1 = document.querySelectorAll('.reveal-type')

splitType1.forEach((char, i) => {

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
        start: 'top 60%',
        end: 'bottom 50%',
        scrub: true,
        markers: false,
        toggleActions: 'play play reverse reverse'
      }
    })
})


const splitType2 = document.querySelectorAll('.erase')

splitType2.forEach((char, i) => {

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
        start: 'top 30%',
        end: 'bottom 30%',
        scrub: true,
        markers: false,
        toggleActions: 'play play reverse reverse'
      }
    })
})

const splitType3 = document.querySelectorAll('.section1-reveal')

splitType3.forEach((char, i) => {

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
        start: 'top 50%',
        end: 'bottom 60%',
        scrub: true,
        markers: false,
        toggleActions: 'play play reverse reverse'
      }
    })
})

const splitType4 = document.querySelectorAll('.section1-reveal-2')

splitType4.forEach((char, i) => {

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
        start: 'bottom 90%',
        end: 'bottom 85%',
        scrub: true,
        markers: false,
        toggleActions: 'play play reverse reverse'
      }
    })
})