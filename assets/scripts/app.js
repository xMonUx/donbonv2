<<<<<<< HEAD
// Side bar toggle
$(document).ready(function() {

    function toggleSidebar() {
        $(".button").toggleClass("active");
        $(".sidebar-item").toggleClass("active");
        $("sidebar").toggleClass("nav-right visible-xs");
        $(".content").toggleClass("active");

    }
  
    $(".button").on("click tap", function() {
        toggleSidebar();
    });
});

// Settings button
$(document).ready(function() {
    $('#btn').click(function() {
        $('.sidebar').toggleClass('active');
    });

    $('.settings').click(function() {
        $('.sidebar-item:not(.settings)').toggleClass('active');
    });

});


  

// Loader strony
window.addEventListener('load',function(){
    document.querySelector('body').classList.add("loaded")  
  });
  

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval = null;
  
  document.getElementById("txt-effect").onmouseover = (event) => {
    let iteration = 0;
  
    clearInterval(interval);
  
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }
  
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
  
      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }
  
      iteration += 1 / 3;
    }, 30);
  };
=======
// Side bar toggle
$(document).ready(function() {

    function toggleSidebar() {
        $(".button").toggleClass("active");
        $(".sidebar-item").toggleClass("active");
        $("sidebar").toggleClass("nav-right visible-xs");
        $(".content").toggleClass("active");

    }
  
    $(".button").on("click tap", function() {
        toggleSidebar();
    });
});

// Settings button
$(document).ready(function() {
    $('#btn').click(function() {
        $('.sidebar').toggleClass('active');
    });

    $('.settings').click(function() {
        $('.sidebar-item:not(.settings)').toggleClass('active');
    });

});


  

// Loader strony
window.addEventListener('load',function(){
    document.querySelector('body').classList.add("loaded")  
  });
  

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval = null;
  
  document.getElementById("txt-effect").onmouseover = (event) => {
    let iteration = 0;
  
    clearInterval(interval);
  
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }
  
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
  
      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }
  
      iteration += 1 / 3;
    }, 30);
  };
>>>>>>> donbonv2/main
  