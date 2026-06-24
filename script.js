const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => mobileMenu.classList.remove("open"));
});

const compareRange = document.getElementById("compareRange");
const beforeWrap = document.getElementById("beforeWrap");
const compareLine = document.getElementById("compareLine");

function updateCompare(value){
  beforeWrap.style.width = value + "%";
  compareLine.style.left = value + "%";
}
compareRange.addEventListener("input", e => updateCompare(e.target.value));
updateCompare(50);

const tabs = document.querySelectorAll(".price-tabs button");
const cards = document.querySelectorAll(".price-card");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const cat = tab.dataset.cat;
    cards.forEach(card => {
      card.classList.toggle("hide", cat !== "all" && card.dataset.cat !== cat);
    });
  });
});

const stories = document.querySelectorAll(".story");
const galleryCards = document.querySelectorAll(".gallery-card");

stories.forEach(story => {
  story.addEventListener("click", () => {
    stories.forEach(s => s.classList.remove("active"));
    story.classList.add("active");

    const filter = story.dataset.filter;
    galleryCards.forEach(card => {
      const show = filter === "all" || card.dataset.style === filter;
      card.style.display = show ? "block" : "none";
    });

    document.getElementById("galerie").scrollIntoView({behavior:"smooth"});
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
