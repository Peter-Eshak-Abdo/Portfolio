function myFunction() {
  var element = document.body;
  element.dataset.bsTheme = element.dataset.bsTheme == "light" ? "dark" : "light";
}

const projects = [
  {
    title: "Netlab-Course",
    description: "That was offline course",
    src: "https://github.com/Peter-Eshak-Abdo/Netlab-Course",
    link: "https://peter-eshak-abdo.github.io/Netlab-Course",
  },
  {
    title: "MoveOn",
    description: "Collage Section Project With Team of 3 girls in second Year and fisrt Semester",
    src: "https://github.com/Peter-Eshak-Abdo/MoveOn",
    link: "https://moveon-7ee89.web.app",
  },
  {
    title: "Section3_Apple",
    description: "Collage Section Project With Team of 4 girls in First Year and first Semester",
    src: "https://github.com/Peter-Eshak-Abdo/Section3_Apple",
    link: "https://section3-apple.web.app",
  },
  {
    title: "Abona Faltaus",
    description: "Personal Project for Christian media without React or Next",
    src: "https://github.com/Peter-Eshak-Abdo/abona-faltaus",
    link: "https://abona-faltaus.web.app/",
  },
  {
    title: "udemy_shop",
    description: "Flutter Shop project for Udemy course",
    src: "https://github.com/PeterEshak/udemy_shop",
    link: "",
  },
  {
    title: "Curricula",
    description: "Flutter Personal Project for Primary Curricula",
    src: "https://github.com/PeterEshak/Curricula",
    link: "",
  },
  {
    title: "CV",
    description: "Personal Project for First CV",
    src: "",
    link: "https://peter-eshak.blogspot.com/2020/10/blog-post.html",
  },
  {
    title: "Youtube Channel",
    description: "My Youtube Channel",
    src: "",
    link: "https://www.youtube.com/channel/UCdt02aWMr-mlqM2eC8A_brg",
  },
  {
    title: "كورس HTML",
    description: "First Blog",
    src: "",
    link: "https://peter-eshak.blogspot.com/2020/12/html.html",
  },
  {
    title: "كورس Adobe illustrator",
    description: "Second Blog",
    src: "",
    link: "https://peter-eshak.blogspot.com/2020/12/adobe-illustrator-cc-aylastrytvr-css.html",
  },
  {
    title: "Github",
    description: "Github README page",
    src: "https://github.com/Peter-Eshak-Abdo/Peter-Eshak-Abdo",
    link: "https://github.com/Peter-Eshak-Abdo",
  },
];

const secProjects = document.getElementById("projects");
for (let i = 0; i < projects.length; i++) {
  const project = document.createElement("div");
  project.classList.add("card");
  project.classList.add("m-4");
  project.style.width = "19rem";

  project.innerHTML = `
    <div class="card-body">
      <h5 class="card-title text-center fw-bold fs-3 pb-3">${projects[i].title}</h5>
      <p class="card-text fs-5">${projects[i].description}</p>
      <a href="${projects[i].src}" class="btn btn-outline-primary mx-lg-3 mx-sm-2" target="_blank">Sourse Code</a>
      <a href="${projects[i].link}" class="btn btn-outline-info" target="_blank">Website Link</a>
      </div>
      `;
      // <a href="${projects[i].src}" class="btn ${projects[i].src == "" ? disabled : btn - outline - primary}" target="_blank">Sourse Code</a>
      // <a href="${projects[i].link}" class="btn ${projects[i].link == "" ? disabled : btn - outline - info}" target="_blank">Website Link</a>

  secProjects.appendChild(project);
}

// ----------------------------------------------------------------------------------
const proLang = [
  {
    name: "HTML",
    description: "it's an Structuer language",
    ability: "90",
    IDK: "Canva",
  },
  {
    name: "CSS",
    description: "it's an Style language",
    ability: "85",
    IDK: "Grid",
  },
  {
    name: "Javascript",
    description: "it's an Dynamic language and actions",
    ability: "70",
    IDK: "Async, AJAX, JSON",
  },
  {
    name: "React",
    description: "it's an Framwork JS",
    ability: "40",
    IDK: "Hooks, Next",
  },
  {
    name: "Bootstrap",
    description: "it's an Framwork CSS",
    ability: "100",
    IDK: "",
  },
  {
    name: "SASS & SCSS",
    description: "it's an Style",
    ability: "20",
    IDK: "Nesting, Mixins",
  },
  {
    name: "JQuery",
    description: "it's an Structuer language",
    ability: "80",
    IDK: "",
  },
  {
    name: "Java",
    description: "it's an Structuer language",
    ability: "15",
    IDK: "",
  },
  {
    name: "Python",
    description: "it's an Structuer language",
    ability: "10",
    IDK: "",
  },
  {
    name: "C++",
    description: "it's an Structuer language",
    ability: "15",
    IDK: "",
  },
  {
    name: "Flutter & Dart",
    description: "it's an Structuer language",
    ability: "65",
    IDK: "Data",
  },
];

const secProLang = document.getElementById("proLang");
for (let i = 0; i < proLang.length; i++) {
  const proLanguage = document.createElement("div");
  proLanguage.classList.add("card");
  proLanguage.classList.add("m-4");
  proLanguage.style.width = "18rem";

  proLanguage.innerHTML = `
    <div class="card-body">
      <h5 class="card-title text-center fw-bold fs-3 pb-3">${proLang[i].name}</h5>
      <p class="card-text fs-5">${proLang[i].description}</p>
      <div class="progress-stacked">
        <div class="progress" role="progressbar" aria-label="Segment one Animated striped" aria-valuenow="${
          proLang[i].ability
        }" aria-valuemin="0" aria-valuemax="100" style="width: ${proLang[i].ability}%;">
          <div class="progress-bar bg-success progress-bar-striped progress-bar-animated">${proLang[i].ability}%</div>
        </div>
        <div class="progress" role="progressbar" aria-label="Segment two Animated striped" aria-valuenow="${
          100 - proLang[i].ability
        }" aria-valuemin="0" aria-valuemax="100" style="width: ${100 - proLang[i].ability}%">
          <div class="progress-bar bg-danger progress-bar-striped progress-bar-animated">${100 - proLang[i].ability}%</div>
        </div>

      </div>
    </div>
  `;

  secProLang.appendChild(proLanguage);
}
// ----------------------------------------------------------------------------------
// service-worker.js

const putInCache = async (request, response) => {
  const cache = await caches.open("v1");
  await cache.put(request, response);
};

const cacheFirst = async ({ request, fallbackUrl }) => {
  // First try to get the resource from the cache.
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }

  // If the response was not found in the cache,
  // try to get the resource from the network.
  try {
    const responseFromNetwork = await fetch(request);
    // If the network request succeeded, clone the response:
    // - put one copy in the cache, for the next time
    // - return the original to the app
    // Cloning is needed because a response can only be consumed once.
    putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork;
  } catch (error) {
    // If the network request failed,
    // get the fallback response from the cache.
    const fallbackResponse = await caches.match(fallbackUrl);
    if (fallbackResponse) {
      return fallbackResponse;
    }
    // When even the fallback response is not available,
    // there is nothing we can do, but we must always
    // return a Response object.
    return new Response("Network error happened", {
      status: 408,
      headers: { "Content-Type": "text/plain" },
    });
  }
};

self.addEventListener("fetch", (event) => {
  event.respondWith(
    cacheFirst({
      request: event.request,
      fallbackUrl: "/fallback.html",
    }),
  );
});
