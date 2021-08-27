let tl = gsap.timeline();

tl.to(".intro h1",{
   y:"0%",
   opacity:1,
   duration:2,
   stagger:0.25
})
tl.to(".intro",{
    y:"100%",
    duration:1.5,
    delay:1
})