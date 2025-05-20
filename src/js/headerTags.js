const tags = [
    {
        icon: `<i class="fa-solid fa-code fa-sm mr-1 text-blue-700" aria-hidden="true"></i>`,
        name: "Full Stack"
    },
    {
        icon: `<i class="fa-solid fa-brain fa-sm mr-1 text-purple-500" aria-hidden="true"></i>`,
        name: "Agentic AI"
    },
    {
        icon: `<i class="fa-solid fa-cloud fa-sm mr-1 text-cyan-600" aria-hidden="true"></i>`,
        name: "Cloud"
    },
];

const parent = document.getElementById("header-tags");

const html = tags.map(tag =>
    `<button type="button" aria-label="${tag.name} tag" class="text-gray-900 bg-gray-100 border border-gray-100 hover:bg-gray-50 font-medium rounded-full text-sm px-4 py-2 lg:px-5 lg:py-2.5 mr-1 mb-2 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-800 dark:hover:bg-gray-700 dark:hover:border-gray-700">
        ${tag.icon}
        <span>${tag.name}</span>
    </button>`
);

parent.innerHTML = html.join(" ");
