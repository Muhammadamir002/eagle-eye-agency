// for index page
// fade-in animation 
document.addEventListener('DOMContentLoaded', () => {
    const initFadeInObserver = () => {
        const fadeInElements = document.querySelectorAll('.fade-in');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, observerOptions);

        fadeInElements.forEach(element => {
            observer.observe(element);
        });
    };

    initFadeInObserver();
});



// hero section col-left

// gsap.registerPlugin(ScrollTrigger);

// Animate Hero Section Left Content
// gsap.from(".hero__title span", {
//   // y: 60,
//   opacity: 0,
//   duration: 1,
//   stagger: 0.2,
//   ease: "power3.out",
//   scrollTrigger: {
//     trigger: ".hero__left",
//     start: "top 80%",
//   }
// });

// gsap.from(".head-badge-left, .badge-right", {
//   // x: -50,
//   opacity: 0,
//   duration: 1,
//   delay: 0.5,
//   stagger: 0.2,
//   ease: "power2.out",
//   scrollTrigger: {
//     trigger: ".hero__left",
//     start: "top 75%",
//   }
// });

//for hero description and btn--secondary

// gsap.from(".hero__subtitle", {
//   y: 40,
//   opacity: 0,
//   duration: 1,
//   delay: 0.8,
//   ease: "power2.out",
//   scrollTrigger: {
//     trigger: ".hero__subtitle",
//     start: "top 90%",
//   }
// });

// gsap.from(".hero__description", {
//   y: 40,
//   opacity: 0,
//   duration: 1,
//   delay: 1.0,
//   ease: "power2.out",
//   scrollTrigger: {
//     trigger: ".hero__description",
//     start: "top 90%",
//   }
// });

// gsap.from(".btn--secondary", {
//   scale: 0.8,
//   opacity: 0,
//   duration: 0.8,
//   delay: 1.2,
//   ease: "back.out(1.7)",
//   scrollTrigger: {
//     trigger: ".btn--secondary",
//     start: "top 95%",
//   }
// });




// for success-story-page and our-services page text bubble animation 


function wrapLetters(selector) {
  const elements = document.querySelectorAll(selector);

  elements.forEach(element => {
    const childNodes = Array.from(element.childNodes);

    childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        const chars = node.textContent.split('');
        const fragment = document.createDocumentFragment();

        chars.forEach(char => {
          const span = document.createElement('span');
          span.className = 'letter';
          span.textContent = char;
          fragment.appendChild(span);
        });

        element.replaceChild(fragment, node);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        wrapLettersFromNode(node); // recursive
      }
    });
  });
}

function wrapLettersFromNode(node) {
  const childNodes = Array.from(node.childNodes);

  childNodes.forEach(child => {
    if (child.nodeType === Node.TEXT_NODE) {
      const chars = child.textContent.split('');
      const fragment = document.createDocumentFragment();

      chars.forEach(char => {
        const span = document.createElement('span');
        span.className = 'letter';
        span.textContent = char;
        fragment.appendChild(span);
      });

      node.replaceChild(fragment, child);
    } else if (child.nodeType === Node.ELEMENT_NODE) {
      wrapLettersFromNode(child); // deep recursive
    }
  });
}

// ⬇️ Apply on new and old sections
wrapLetters('.title-our-success-story');
wrapLetters('.our-success-story-subtitle');
wrapLetters('.our-success-story-subtitle-2');
wrapLetters('.our-success-story-subtitle-3');
wrapLetters('.title-our-services');
wrapLetters('.title-our-services-desc');







// for about-us and success-story profile-star and counter animation 

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".testimonial-box",
  start: "top 80%",
  once: true,
  onEnter: () => {
    // Animate avatars
    gsap.from(".avatar", {
      opacity: 0,
      scale: 0.5,
      stagger: 0.2,
      duration: 0.6,
      ease: "power2.out"
    });

    // Animate stars
    gsap.from(".star img", {
      opacity: 0,
      scale: 0.5,
      stagger: 0.15,
      delay: 0.5,
      duration: 0.5,
      rotation: 360,
      ease: "back.out(1.7)"
      
    });

    // Animate counter
    let count = { val: 0 };
    const target = 1200;
    gsap.to(count, {
      val: target,
      duration: 2,
      delay: 1,
      ease: "power1.out",
      onUpdate: () => {
        document.getElementById("counter").innerText = Math.floor(count.val);
      },
      onComplete: () => {
        document.getElementById("counter").innerText = target;
      }
    });
  }
});


// completed for profile stars



// all brands animations

// Animate heading lines
gsap.from(".activity-header h2", {
  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".activity-header h2",
    start: "top 85%",
    toggleActions: "play none none none"
  }
});

// Animate paragraph
gsap.from(".activity-header p", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".activity-header p",
    start: "top 90%",
    toggleActions: "play none none none"
  }
});

// Animate "Go Back" button
gsap.from(".go-back-btn", {
  scale: 0.8,
  opacity: 0,
  duration: 0.8,
  delay: 0.4,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".go-back-btn",
    start: "top 95%",
    toggleActions: "play none none none"
  }
});

 
// all brands card animations
gsap.utils.toArray(".activity-grid .grid-item").forEach((item, i) => {
  gsap.fromTo(item, 
    {
      // opacity: 0,
      scale: 0.8,
      // rotationY: 45,
      transformOrigin: "center center",
      filter: "blur(2px)",
    },
    {
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      // opacity: 1,
      scale: 1,
      // rotationY: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power3.out",
      delay: i * 0.15,
    }
  );
});


// for our services section right img

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".target-image", {
    scrollTrigger: {
      trigger: ".target-image",
      start: "top 80%", // when image enters viewport
      toggleActions: "play none none none"
    },
    duration: 1.2,
    opacity: 0,
    scale: 0.8,
    // rotate: -10,
    ease: "power3.out"
  });
});


gsap.to(".target-image", {
  scrollTrigger: {
    trigger: ".target-image",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play pause resume reset",
    scrub: false
  },
  scale: 1.05,
  duration: 1,
  yoyo: true,
  repeat: -1,
  ease: "power1.inOut"
});


// for brands section 
// GSAP & ScrollTrigger initialize
// gsap.registerPlugin(ScrollTrigger);

// // Scroll animation for all icons inside brand cards
// gsap.from(".card-icon img", {
//   scrollTrigger: {
//     trigger: ".brand-cards",
//     start: "top 85%",
//     toggleActions: "play none none none"
//   },
//   duration: 1,
//   opacity: 0,
//   scale: 0.6,
//   y: 30,
//   ease: "power3.out",
//   stagger: {
//     amount: 0.5,
//     from: "start"
//   }
// });

// Hover animation for cta section cta-form
const icons = document.querySelectorAll('.contact-cta .cta-form');

icons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    gsap.to(icon, {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
      duration: 0.1,
      ease: "power1.out"
    });
  });
  icon.addEventListener('mouseleave', () => {
    gsap.to(icon, {
      scale: 1,
      boxShadow: "none",
      duration: 0.1,
      ease: "power1.out"
    });
  });
});


// for email section

document.addEventListener('DOMContentLoaded', function() {
    // Form aur button ka reference hasil karein
    const ctaForm = document.querySelector('.cta-form');
    const sendEmailButton = ctaForm.querySelector('button[type="submit"]');
    const emailInput = ctaForm.querySelector('input[type="email"]');

    // Button par 'click' event ke liye event listener add karein
    sendEmailButton.addEventListener('click', function(event) {
        // Form ke default submission behavior ko rokein (jo page ko reload kar sakta hai)
        event.preventDefault();

        // Email address placeholder se ya fixed value se hasil karein
        const recipientEmail = emailInput.placeholder || "Eagleeye.sindh.pk@gmail.com"; // Agar placeholder khali ho to hardcoded value istemal karein

        // Mailto link banayein
        const subject = encodeURIComponent("Inquiry from Your Website"); // Subject ko URL-encode karein
        const body = encodeURIComponent("Hello Eagle Eye team,\n\nI am interested in your services and would like to know more.\n\nBest regards,"); // Body ko URL-encode karein

        const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

        // User ke default email client ko open karein
        window.location.href = mailtoLink;
    });
});



// page shifting

  // const links = document.querySelectorAll("a");

  // links.forEach(link => {
  //   link.addEventListener("click", function(e) {
  //     const href = link.getAttribute("href");

  //     // Only transition if it's not an external link or anchor
  //     if (href && !href.startsWith("http") && !href.startsWith("#")) {
  //       e.preventDefault();
  //       gsap.to("body", {
  //         opacity: 0,
  //         duration: 0.5,
  //         onComplete: () => {
  //           window.location.href = href;
  //         }
  //       });
  //     }
  //   });
  // });

  // Fade-in when page loads
  // gsap.from("body", {
  //   opacity: 0,
  //   duration: 0.5
  // });


// home-page hero-text animation
gsap.registerPlugin(TextPlugin);

document.addEventListener("DOMContentLoaded", () => {
  const line1 = document.getElementById("typingLine1");
  const line2 = document.getElementById("typingLine2");
  const line3 = document.getElementById("typingLine3");

  // Reset text
  line1.textContent = "";
  line2.textContent = "";
  line3.textContent = "";

  const tl = gsap.timeline();

  tl.to(line1, {
    duration: 2,
    text: "Eagle Eye",
    // ease: "power1.inOut",
  })
    .to(line2, {
      duration: 2,
      text: "We Are The",
      ease: "power1.inOut",
      delay: 0.3,
    })
    .to(line3, {
      duration: 2,
      text: "Brand Riser",
      ease: "power1.inOut",
      delay: 0.3,
    });
});



// go back home button on screen fixed
 document.addEventListener("DOMContentLoaded", () => {
  const goHomeBtn = document.querySelector(".go-home-btn");
  const header = document.querySelector(".activity-header"); // Adjust selector if needed

  const toggleGoHomeVisibility = () => {
    const headerBottom = header.offsetTop + header.offsetHeight;
    const scrollY = window.scrollY;

    if (scrollY < headerBottom) {
      goHomeBtn.classList.add("visible");
    } else {
      goHomeBtn.classList.remove("visible");
    }
  };

  // Run once on load and on scroll
  toggleGoHomeVisibility();
  window.addEventListener("scroll", toggleGoHomeVisibility);
});





// home-page cta-section text-typing animation

  gsap.registerPlugin(ScrollTrigger);

  const headingText = "Let's Work Together.";
  const paragraphText = "Ready to bring your vision to life? Partner with us to create impactful, creative solutions that drive real results. Let’s build something great together.";

  const headingEl = document.querySelector('.cta-heading');
  const paragraphEl = document.querySelector('.cta-subtext');

  function typeEffect(element, text, speed = 20, callback) {
    let i = 0;
    function typing() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typing, speed);
      } else if (callback) {
        callback();
      }
    }
    typing();
  }

  ScrollTrigger.create({
    trigger: ".cta-section",
    start: "top 80%",
    once: true, // only once
    onEnter: () => {
      typeEffect(headingEl, headingText, 50, () => {
        setTimeout(() => {
          typeEffect(paragraphEl, paragraphText, 25);
        }, 300);
      });
    }
  });