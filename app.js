const truckBody = document.querySelector(".truck_body");
const animatedBtn = document.querySelector(".animated_btn");
const loader = document.querySelector(".loader");
const kick = document.querySelector(".kick");
const box = document.querySelector(".box");
const css = window.document.styleSheets[0];
const root = document.querySelector(":root");
const check = document.querySelector(".check");

const getPkg = (name) => {
  css.insertRule(
    `@keyframes ${name} {
        0% {
    transform: translateX(10px);
  }
  20% {
    transform: translateX(157px);
  }
  40% {
    transform: translateX(157px) translateY(26px);
  }

  58% {
    transform: translateY(26px) translateX(157px);
  }
 
  80% {
    transform: translateY(26px) translateX(157px);
  }
  90% {
    transform: translateY(26px) translateX(157px);
  }
  100% {
    transform: translateY(26px) translateX(157px);
  }

}`,
    css.cssRules.length
  );
  box.style.animation = "drop 2s ease forwards";
};
const load = (name) => {
  css.insertRule(
    `@keyframes ${name} {
        0% {
            width: 0%
          }
        25% {
            width: 25%
          }
          100% {
          width: 100%
        }
  }`,
    css.cssRules.length
  );
  loader.style.animation = "load 1.7s ease-out forwards";
};
const checkMark = (name) => {
  css.insertRule(
    `@keyframes ${name} {
  0% {
    height: 0;
    width: 0;
    opacity: 1;
  }
  20% {
    height: 0;
    width: 16px;
    opacity: 1;
  }
  40% {
    height: 26px;
    width: 16px;
    opacity: 1;
  }
  100% {
    height: 26px;
    width: 16px;
    opacity: 1;
  }
  }`,
    css.cssRules.length
  );
  check.style.animation = "check .8s ease forwards";
  check.style.animationDelay = "1s";
};
const driveTruck = (name) => {
  css.insertRule(
    `@keyframes ${name} {
    0%{
        transform: translateX(-10px);
    }
    25%{
        transform: translateX(30px);
        
    }
    50%{
        transform: translateX(-30px);
        
    }
    100%{
        transform: translateX(250px);
        
    
}}`,
    css.cssRules.length
  );
  truckBody.style.animation = "move 1.8s ease forwards";
  truckBody.style.animationDelay = "2s";
};

kick.addEventListener("click", (e) => {
  e.preventDefault();
  e.target.style.transform = "translateZ(-25px) rotateX(-90deg)";
  root.style.setProperty("--borderRadius", "0px");
  truckBody.style.opacity = "1";
  setTimeout(() => {
    loader.style.display = " block";
    load("load");
  }, 2500);
  setTimeout(() => {
    box.style.display = "block";
    getPkg("drop");
  }, 1000);
  driveTruck("move");
  setTimeout(() => {
    kick.style.transform = "translateZ(25px) rotateX(0deg)";
    truckBody.style.display = "none";
    loader.style.display = "none";
    root.style.setProperty("--pseudo-content", `"Order Placed"`);
    checkMark("check");
  }, 5000);
});
