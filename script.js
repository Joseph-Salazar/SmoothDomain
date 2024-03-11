/* Zoom in */

gsap.set(".zi-scaleDown", {xPercent: -50, yPercent: -50});
gsap.to(".zi-scaleDown", {scale: 1.6, scrollTrigger: {
  trigger: ".zi-container",
  pin: ".zi-container",
  scrub: true,
}})

gsap.to("#border-opacity", {
    borderColor: "rgba(0, 124, 186, 0)",

    scrollTrigger: {
        start: 'top top',

      trigger: ".zi-container",
      scrub: true
    }
});

gsap.to(".zi-container", {
    backgroundColor: "#000",

    scrollTrigger: {
        start: 'top top',

      trigger: ".zi-container",
      scrub: true
    }
});

gsap.to(".zi-anothergrid", {
    color: "#fff",
    scrollTrigger: {
        start: 'top top',
      trigger: ".zi-container",
      scrub: true
    }
});



/* Lenis */


const lenis = new Lenis()

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

requestAnimationFrame(raf)

/* Random */

function randomType(element, characters, duration, sequential = false) {
    let originalText = element.innerText;
    let textArray = originalText.split('');
    let charactersArray = characters.split('');
    let startTime = new Date().getTime();
    let interval;

    if (sequential) {
        let currentIndex = 0;
        interval = setInterval(function() {
            textArray[currentIndex] = charactersArray[Math.floor(Math.random() * charactersArray.length)];
            element.innerText = textArray.join('');
            currentIndex++;
            if (currentIndex === textArray.length) {
                currentIndex = 0;
            }
            if (new Date().getTime() - startTime >= duration) {
                clearInterval(interval);
                element.innerText = originalText;
            }
        }, 20);
    } else {
        interval = setInterval(function() {
            for (let i = 0; i < textArray.length; i++) {
                textArray[i] = charactersArray[Math.floor(Math.random() * charactersArray.length)];
            }
            element.innerText = textArray.join('');
            if (new Date().getTime() - startTime >= duration) {
                clearInterval(interval);
                element.innerText = originalText;
            }
        }, 0);
    }
}

let p = document.querySelector('.random-type');

let originalText = p.innerText;


const texts = ['Diseñador', 'Coder', 'Freelancer'];
let currentIndex = 0;

function updateText() {
    const textElement = document.querySelector('.random-type');
    
    textElement.textContent = texts[currentIndex];

    randomType(textElement, '01', 500, true);

    currentIndex = (currentIndex + 1) % texts.length;
}

updateText();

setInterval(updateText, 2000);

/* Cursor */

const cursor = document.getElementById("cursor");
const stalker = document.getElementById("stalker");
document.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;
  cursor.style.transform = `translate(${x}px, ${y}px)`;
  stalker.style.transform = `translate(${x}px, ${y}px)`;
});

/* Reveal */

const splitTypes = document.querySelectorAll('.reveal-type');

splitTypes.forEach((char, i) => {
    const text = new SplitType(char, { types: 'words, chars'})

    gsap.from(text.chars, {
        scrollTrigger: {
            trigger: char,
            start: 'top 90%',
            end: 'top 30%',
            scrub: true,
        },
        scaleY: 0,
        y: -20,
        transformOrigin: 'top',
        opacity: 0.2,
        stagger: 0.1
    })
})

/* 3 columns */

const scroll = document.getElementById('add-scroll');

gsap.to(scroll, {
    y: () => {
        return 0.2 * window.innerHeight;
    },

    scrollTrigger: {
        trigger: '.add-style',
        start: 'top 100%',
        end: 'bottom -200%',
        scrub: true,
    }
})

/* Elastic */

const elasticList = document.querySelectorAll('.elastic');

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const width = window.innerWidth;

  const percentage = (mouseX / width);

  const fontVariation = `'wght' ${Math.round(percentage * 700)}`;

  elasticList.forEach(elastic => {
    elastic.style.fontVariationSettings = fontVariation;
  });
});

/* Slide Image */

function createWhiteCurtainAnimation(element) {
    return gsap.to(element, {
        width: '0%',
        ease: 'power3.inOut',
        paused: true,
        duration: 1.2
    });
}

document.querySelectorAll('.portfolio-imgc').forEach((portfolioImgc) => {
    const whiteCurtainAnimation = createWhiteCurtainAnimation(portfolioImgc.querySelector('.white-curtain'));

    ScrollTrigger.create({
        trigger: portfolioImgc,
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'play reverse play reverse',
        onEnter: () => whiteCurtainAnimation.play(),
        onEnterBack: () => whiteCurtainAnimation.play(),
        onLeaveBack: () => whiteCurtainAnimation.reverse(),
        onLeave: () => whiteCurtainAnimation.reverse()
    });
});

/* Beam */

/* const sections = gsap.utils.toArray('.testimonials .testimonial')
const beam = document.querySelector('.beam')

let scrollTween = gsap.to(beam, {
    yPercent: 100 * (sections.length),
    ease: "none",
    scrollTrigger: {
        trigger: '.testimonials',
        scrub: true,
        start: 'top',
        end: "+=50%",
    }
}) */

/* Skills */


const stackCards = gsap.utils.toArray('.stack_card2');
const totalHeight = stackCards.reduce((acc, card) => acc + card.clientHeight, 0);

gsap.to('#help', {
    scrollTrigger: {
        trigger: '.help',
        pin: true,
        start: 'top',
        end: `top +=20`, 
    }
});

    
document.addEventListener("DOMContentLoaded", function () {
    const textElements = document.querySelectorAll('.slide-text');

    textElements.forEach(textElement => {
      const split = new SplitType(textElement, { types: 'words' });

      gsap.from(split.words, {
        opacity: 0,
        x: -50,
        stagger: 0.1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textElement,
          start: 'top 100%',
          toggleActions: 'play none none none',

        },
      });
    });
  });

/* Underline Menu */

document.addEventListener("DOMContentLoaded", function() {
    const hovers = gsap.utils.toArray('.underline-on-hover');

    hovers.forEach(link => {
        const underlineElement = link.querySelector(".underline-element");

        link.addEventListener("mouseenter", () => {
            gsap.to(underlineElement, { width: "100%" });
        });

        link.addEventListener("mouseleave", () => {
            gsap.to(underlineElement, { width: 0 });
        });
    });
});

/* Parallax */

/* gsap.to('.bg', {
    scrollTrigger: {
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.1,
    },
    y: '-90%',
});
 */
const images = gsap.utils.toArray('.parallax');

images.forEach(image => {
    gsap.to(image, {
        yPercent: image.dataset.speed,
        scrollTrigger: {
            scrub: true,
        }
    })
})

/* Loading */

