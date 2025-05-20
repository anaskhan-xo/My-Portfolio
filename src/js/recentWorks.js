const recentWorks = [
  {
    title: "Finance Automation System",
    description: "Finance automation system designed for SMSAMI company to manage financial processes",
    img: "/images/fas.webp",
    link: "https://github.com/Anaskhan-xo/"
  },
  {
    title: "Agentic AI Bot",
    description: "AI-driven bot for streaming and tool calling, enhancing business operations.",
    img: "/images/bot.webp",
    link: "https://github.com/anaskhan-xo/Agentic-ai"
  },
  {
    title: "Online Diary",
    description: "A private online diary where users can log their thoughts and memories.",
    img: "/images/diary.webp",
    link: "https://github.com/Anaskhan-xo/OnlineDiary"
  },
];

const parent = document.getElementById('recent-works');

const html = recentWorks.map(work =>
  `<article class="relative rounded-lg overflow-hidden h-96 w-full cursor-pointer focus:outline-none focus:ring-4 focus:ring-indigo-500">

    <a href="${work.link}" target="_blank" rel="noopener noreferrer" 
       class="block h-full w-full text-white no-underline"
       aria-label="Read more about ${work.title}">
       
      <!-- Visible SEO-friendly image -->
      <img src="${work.img}" alt="${work.title} screenshot or preview" loading="lazy" 
           class="absolute inset-0 w-full h-full object-cover object-center" />

      <!-- Overlay to darken image for text readability -->
      <div aria-hidden="true" class="absolute inset-0 bg-black bg-opacity-50"></div>

      <!-- Content on top -->
      <div class="relative z-10 p-5 flex flex-col justify-between h-full">
        <h3 class="text-xl font-semibold">${work.title}</h3>
        <p class="mt-2">${work.description}</p>
        <span 
          class="inline-flex items-center px-4 py-2 mt-4 text-sm font-medium bg-indigo-600 rounded-lg hover:bg-indigo-700 transition">
          Read more
          <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
          </svg>
        </span>
      </div>
    </a>
  </article>`
);

parent.innerHTML = html.join("");
