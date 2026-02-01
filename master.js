const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// DOM Element
const themeIcon = $(".theme-icon");
const mobileNav = $(".mobile-nav");
const mobileMenuBtn = $(".mobile-menu");
const closeMobileMenuBtn = $(".close-menu");
const testimonialDivs = $$(".testimonial");
const testimonialDots = $$(".testimonial-dot");
const portfolioContainer = $("#portfolio-container");
const linksHeader = $$(".nav-a");
const pages = $$(".page");
const toTopBtn = $("#to-top");
const linksMobile = $$(".link-mobile");
const contactForm = $("#contact-form");

// Portfolio data
const portfolioItems = [
  {
    title: "E-Commerce Website",
    category: "Web Development",
    icon: "fa-solid fa-shopping-cart",
  },
  {
    title: "Mobile App UI",
    category: "UI/UX Design",
    icon: "fa-solid fa-mobile-alt",
  },
  {
    title: "Brand Identity",
    category: "Branding",
    icon: "fa-solid fa-palette",
  },
  {
    title: "SEO Campaign",
    category: "Digital Marketing",
    icon: "fa-solid fa-chart-line",
  },
  {
    title: "Business Platform",
    category: "Web Development",
    icon: "fa-solid fa-briefcase",
  },
  {
    title: "Social Media Strategy",
    category: "Digital Marketing",
    icon: "fa-solid fa-hashtag",
  },
];

// Initialize portfolio
function initializePortfolio() {
  portfolioItems.forEach((item) => {
    const portfolioItem = document.createElement("div");
    portfolioItem.className =
      "portfolio-item shadow-[0px_4px_6px_rgba(0,0,0,0.1)]";
    portfolioItem.innerHTML = `
      <div class="h-50 bg-light-gray flex justify-center items-center text-primary text-[24px]">
          <i class="${item.icon}"></i>
      </div>
      <div class="p-5">
          <h3 class="text-[24px] font-bold mb-3.75 text-black-1">${item.title}</h3>
          <p class="text-gray-1 mb-5 text-[18px]">${item.category}</p>
          <div class="flex justify-between mt-3.75">
              <button class="btn-main shadow-[0px_4px_6px_rgba(0,0,0,0.1)] hover:bg-primary-dark!">View Details</button>
              <button class="btn-main shadow-[0px_4px_6px_rgba(0,0,0,0.1)] bg-secondary! hover:bg-[#6a28c7]! ml-2.5 delete-btn">Delete</button>
          </div>
      </div>
    `;
    portfolioContainer.appendChild(portfolioItem);

    // Add event listener to delete button
    const deleteBtn = portfolioItem.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      portfolioItem.classList.remove("opacity-[1]");
      portfolioItem.classList.add("opacity-[0]!");
      portfolioItem.classList.add("translate-x-[100px]!");
      setTimeout(() => {
        portfolioContainer.removeChild(portfolioItem);
      }, 300);
    });
  });
}

themeIcon.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const icon = themeIcon.querySelector("i");
  if (document.body.classList.contains("dark-theme")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});

mobileMenuBtn.addEventListener("click", () => {
  mobileNav.classList.add("active");
});
closeMobileMenuBtn.addEventListener("click", () => {
  mobileNav.classList.remove("active");
});

testimonialDots.forEach((dot, index) => {
  dot.addEventListener("click", (e) => {
    testimonialDots.forEach((dot) => dot.classList.remove("active"));
    e.target.classList.add("active");

    testimonialDivs.forEach((div, ind) => {
      div.classList.remove("active");
      if (ind === index) {
        div.classList.add("active");
      } else {
        div.classList.remove("active");
      }
    });
  });
});

linksHeader.forEach((link, index) => {
  link.addEventListener("click", (e) => {
    linksHeader.forEach((link) => link.classList.remove("active"));
    e.target.classList.add("active");

    pages.forEach((page, ind) => {
      page.classList.remove("active");
      if (ind === index) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    toTopBtn.classList.add("visible");
  } else {
    toTopBtn.classList.remove("visible");
  }
});

toTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

linksMobile.forEach((link, index) => {
  link.addEventListener("click", (e) => {
    linksMobile.forEach((link) => link.classList.remove("active"));
    e.target.classList.add("active");

    pages.forEach((page, ind) => {
      page.classList.remove("active");
      if (ind === index) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });

    mobileNav.classList.remove("active");
  });
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value;

  alert(
    `Thank you, ${name}! Your message has been received. We'll contact you at ${email} about ${service} services.`
  );

  contactForm.reset();
});

document.addEventListener("DOMContentLoaded", function () {
  initializePortfolio();
});
