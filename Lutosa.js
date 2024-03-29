function myFunction(x) {
    x.classList.toggle("change");
  }
  window.addEventListener('scroll', function() {
    console.log("Scrollin'");
  });
  const callback = function(entries) {
    entries.forEach(entry => {
      entry.target.classList.toggle("is-visible");
    });
  };
  
  const observer = new IntersectionObserver(callback);
  
  const targets = document.querySelectorAll(".show-on-scroll");
  targets.forEach(function(target) {
    observer.observe(target);
  });