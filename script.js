const translations = {
  en: {
    title: "Something",
    h1: "Something",
    who_am_i: `
          <p>Hello my friend</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            quidem nulla est, voluptate distinctio dolore tempore doloremque
            molestiae explicabo. Nisi quis minima alias quo error iusto? Ipsum
            asperiores tenetur nihil.</p>`,
    what_i_do: `
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            quidem nulla est, voluptate distinctio dolore tempore doloremque
            molestiae explicabo. Nisi quis minima alias quo error iusto? Ipsum
            asperiores tenetur nihil.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            quidem nulla est, voluptate distinctio dolore tempore doloremque
            molestiae explicabo. Nisi quis minima alias quo error iusto? Ipsum
            asperiores tenetur nihil.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            quidem nulla est, voluptate distinctio dolore tempore doloremque
            molestiae explicabo. Nisi quis minima alias quo error iusto? Ipsum
            asperiores tenetur nihil.</p>`
  },
  fi: {
    title: "Jotain",
    h1: "Jotain",
    who_am_i: `
          <p>Moro kaiffari</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            quidem nulla est, voluptate distinctio dolore tempore doloremque
            molestiae explicabo. Nisi quis minima alias quo error iusto? Ipsum
            asperiores tenetur nihil.</p>`,
    what_i_do: `
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            quidem nulla est, voluptate distinctio dolore tempore doloremque
            molestiae explicabo. Nisi quis minima alias quo error iusto? Ipsum
            asperiores tenetur nihil.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            quidem nulla est, voluptate distinctio dolore tempore doloremque
            molestiae explicabo. Nisi quis minima alias quo error iusto? Ipsum
            asperiores tenetur nihil.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            quidem nulla est, voluptate distinctio dolore tempore doloremque
            molestiae explicabo. Nisi quis minima alias quo error iusto? Ipsum
            asperiores tenetur nihil.</p>`
  },
};

const languageNames = {
  en: "English",
  fi: "Suomi",
};

function updateContent(langData, lang) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.innerHTML = langData[key];
  });
  const currentLangLink = document.querySelector(`#${lang}`);
  currentLangLink.innerHTML = languageNames[lang];
}

function setLanguagePreference(lang) {
  localStorage.setItem("language", lang);
  location.reload();
}

async function changeLanguage(lang) {
  setLanguagePreference(lang);

  const langData = translations[lang];
  updateContent(langData, lang);
}

window.addEventListener("DOMContentLoaded", async () => {
  const userPreferredLanguage = localStorage.getItem("language") || "fi";
  const langData = translations[userPreferredLanguage];
  updateContent(langData, userPreferredLanguage);
});
