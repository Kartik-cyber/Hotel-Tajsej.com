
function runlocomotive (){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
function texteffect (){
  var allH1  = document.querySelectorAll("#page2 h1 ,#page3 h1 ,#page7-part1 h1, #page8 h1,#page-10-top h1");
allH1.forEach(function(elem){
  clutter = ""
  var textcon = elem.textContent;
  var textsplit = textcon.split("");
  textsplit.forEach(function(e){
    clutter += `<span>${e}</span>`;
    elem.innerHTML = clutter
  })
})
}
function rungsap (){
  var tl = gsap.timeline();


  tl.to("#page1", {
    backgroundSize: "100%",
    height: "100vh",
    width: "100vw",
    delay: 2,
    duration: 3,
    ease: "0.1",
  });
tl.from("#page1-top-part-2 h1",{
  y: -100,
  duration:1,
  opacity: 0,
});
tl.from("#page1-top-part-2 h5",{
  y: -100,
  duration:1,
  opacity: 0,
});
tl.from("#page1-top-part-1 i",{
  y: -150,
  opacity: 0,
},"same");
tl.from("#page1-top-part-3 button",{
  y: -150,
  opacity: 0,
},"same");
tl.to("#page2 h1 span",{
  color:"#E3E3C4",
  stagger:0.5,
  scrollTrigger: {
    trigger:"#page2 h1",
    scroller:"#main",
    // markers:true,
    start:"top 30%",
    end:"top -5%",
    scrub:5,
  }
});

tl.to("#page3 h1 span",{
  color:"#434B34",
  stagger:0.5,
  scrollTrigger: {
    trigger:"#page3 h1",
    scroller:"#main",
    // markers:true,  
    start:"top 80%",
    end:"top 100%",
    scrub:3,
  }
})
tl.to("#page4-left-bottom img",{
  opacity: 4,
  scrollTrigger: {
    trigger:"#page4-left-bottom img",
    scroller:"#main",
    // markers:true,
    start:"top 70%",
    end:"top 75%",
    scrub:5,
  }

});
tl.to("#page4-left-top p",{
  opacity: 5,
  scrollTrigger:{
    trigger:"#page4-left-top p",
    scroller:"#main",
    // markers:true,
    start:"top 20%",
    end:"top 30%",
    scrub:5,
  }

});
tl.to("#page4-right-top img",{
    opacity: 5,
  scrollTrigger: {
    trigger:"#page4-left-bottom img",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    end:"top 95%",
    scrub:5,
  }
});
tl.to("#page4-right-bottom img",{
    opacity: 5,
  scrollTrigger: {
    trigger:"#page4-left-bottom img",
    scroller:"#main",
    // markers:true,
    start:"top 80%",
    end:"top 85%",
    scrub:5,
  }
});
tl.to("#page7-part1 h1 span",{
  color:"#E3E3C4",
  stagger:0.5,
  scrollTrigger: {
    trigger:"#page7 h1",
    scroller:"#main",
    // markers:true,
    start:"top 50%",
    end:"top 40%",
    scrub:5,
  }
});

tl.to("#page7-part2-child1",{
    opacity: 5,
  scrollTrigger: {
    trigger:"#page7",
    scroller:"#main",
    // markers:true,  
    start:"top 20%",
    end:"top 25%",
    scrub:5,
  }
});

tl.to("#page7-part2-child3",{
    opacity: 5,
  scrollTrigger: {
    trigger:"#page7",
    scroller:"#main",
    // markers:true,
    start:"top 20%",
    end:"top 25%",
    scrub:5,
  }
});

tl.to("#page7-part2-child2",{
    opacity: 5,
  scrollTrigger: {
    trigger:"#page7",
    scroller:"#main",
    // markers:true,
    start:"top 10%",
    end:"top 25%",
    scrub:5,
  }
});
tl.to("#page8 h1 span",{
  color:"#434B34",
  stagger:0.5,
  scrollTrigger: {
    trigger:"#page8 h1",
    scroller:"#main",
    // markers:true,  
    start:"top 50%",
    end:"top 30%",
    scrub:3,
  }
});
tl.to(".page9-parent-child2",{
  width: "50%",
  opacity:1,
  scrollTrigger:{
    trigger:"#page9",
    scroller:"#main",
    // markers: true,
    start:"top 30%",
    end:"top 10%",
    scrub:2,
  }
});
tl.to("#page-10-top h1 span",{
  color:"#E3E3C4",
  stagger:0.5,
  scrollTrigger: {
    trigger:"#page-10-top h1",
    scroller:"#main",
    // markers:true,  
    start:"top 50%",
    end:"top 30%",
    scrub:3,
  }
});
};
var swiperr = function(){
    var swiper = new Swiper(".page6", {
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
  el: ".swiper-pagination",
  clickable: true,
  },
});
}
runlocomotive();
texteffect();
rungsap();
swiperr();