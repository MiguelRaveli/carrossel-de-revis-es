const people = [
  {
    title: "Miguel",
    subtitle: "Dev Frontend",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officiis labore facere velit quas! Eos tempore, iure ullam delectus atque eveniet quae inventore illum ad nobis consequatur voluptatem rerum laborum.",
  },
  {
    title: "Matheus",
    subtitle: "Dev backend",
    para: "Labore facere velit quas! Eos tempore, iure ullam delectus atque eveniet quae inventore illum ad nobis consequatur voluptatem rerum laborum.",
  },
  {
    title: "Adriano",
    subtitle: "Dev full stack",
    para: "Illum ad nobis consequatur voluptatem rerum laborum.",
  },
];
const btns = document.querySelectorAll(".btn");
const paragraph = document.querySelector("#paragraph");
const title = document.querySelector("#title");
const subtitle = document.querySelector("#subtitle");
const info = (currentPage) => {
  const item = people[currentPage];
  title.textContent = item.title;
  subtitle.textContent = item.subtitle;
  paragraph.textContent = item.para;
};
let currentPage = 0;
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("next")) {
      currentPage++;
      if (currentPage === people.length) {
        currentPage = 0;
      }
    } else if (styles.contains("previous")) {
      currentPage--;
      if (currentPage < 0) {
        currentPage = 0;
      }
    } else if (styles.contains("surpriseMe")) {
      currentPage = Math.floor(Math.random() * people.length);
    }
    info(currentPage);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const item = people[currentPage];
  title.textContent = item.title;
  subtitle.textContent = item.subtitle;
  paragraph.textContent = item.para;
});
