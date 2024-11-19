// إظهار الزر عند التمرير لأسفل
window.onscroll = function () {
  scrollFunction();
  updateProgressBar();
};

function scrollFunction() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

function updateProgressBar() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  scrollToTopBtn.style.setProperty("--scroll", scrolled + "%");
  if (scrolled > 0) {
    scrollToTopBtn.classList.add("scrolled");
  } else {
    scrollToTopBtn.classList.remove("scrolled");
  }
}

// العودة إلى أعلى الصفحة عند النقر على الزر
document.getElementById("scrollToTopBtn").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navUl = document.querySelector("nav ul");

  menuToggle.addEventListener("click", function () {
    navUl.style.display = navUl.style.display === "flex" ? "none" : "flex";
  });
});

let btn = document.getElementById("btn");
let menu = document.getElementById("menuu");

btn.addEventListener("click", function () {
  menu.classList.toggle("active");
});
// إضافة حدث التمرير لتطبيق الفئة 'scrolled' على عنصر 'nav'
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  const scrollY = window.scrollY;

  if (scrollY > 0) {
    nav.classList.add("scrolled"); // إضافة الفئة عند التمرير
    nav.style.transition = "top 0.7s ease";
    nav.style.border = "1px solid #16edb014"; // إضافة تأثير انسيابي
    // إضافة تأثير انسيابي
  } else {
    nav.classList.remove("scrolled"); // إزالة الفئة عند العودة للأعلى
    nav.style.transition = "top 0.7s ease";
    nav.style.border = "0px solid #16edb014"; // إضافة تأثير انسيابي
  }
});


// Add this JavaScript to your main.js
document.addEventListener("DOMContentLoaded", function() {
  const counters = document.querySelectorAll('.count');
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-count');
      const count = +counter.innerText;

      const increment = target / 200; // Adjust the speed of the counter
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
});

// إضافة كود JavaScript لتفعيل العد عند التمرير إلى قسم الإحصائيات
document.addEventListener("DOMContentLoaded", function() {
    const statisticsSection = document.querySelector('.statistics');
    const counters = document.querySelectorAll('.count');
    let hasCounted = false;

    const countUp = (element, target) => {
        let count = 0;
        const increment = Math.ceil(target / 200); // زيادة تدريجية (تم تقليل السرعة)
        const interval = setInterval(() => {
            count += increment;
            if (count >= target) {
                count = target;
                clearInterval(interval);
            }
            element.textContent = count;
        }, 10);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasCounted) {
                hasCounted = true;
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    countUp(counter, target);
                });
            }
        });
    });

    observer.observe(statisticsSection);
});