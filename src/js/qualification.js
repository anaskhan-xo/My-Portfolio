const qualifications = [
 
    {
        title: "Open Source Contributions",
        year: "Ongoing",
        description: "Actively contributing to open-source projects, focusing on AI, cloud technologies, and automation tools, while collaborating with the community to improve and enhance projects.",
        institute: {
            name: "GitHub & Open Source Community",
            shortName: "GitHub",
            duration: "Present",
            link: "https://github.com/anaskhan-xo"
        }
    }
];

const parent = document.getElementById('qualification');

const html = qualifications.map(quali => {
    // sanitize title for aria-label and link
    const ariaLabel = `Learn more about ${quali.title}`;
    const instituteName = quali.institute.name.replace(/"/g, '&quot;'); 
    
    return `
    <li class="mb-10 ml-4 relative">
        <div class="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" aria-hidden="true"></div>
        <div class="flex items-center">
            <time class="mb-1 mr-3 px-3 py-2 rounded-md leading-none text-gray-100 bg-blue-500 dark:bg-gray-600" datetime="${quali.year === 'Ongoing' ? new Date().getFullYear() : quali.year}">
                ${quali.year}
            </time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-200">
                ${quali.title}
                <a href="${quali.institute.link}" target="_blank" rel="noopener noreferrer" aria-label="${ariaLabel}" class="ml-3 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600">
                    <i class="fa-solid fa-arrow-up-right-from-square fa-2xs" aria-hidden="true"></i>
                </a>
            </h3>
        </div>
        <p class="text-gray-800 dark:text-gray-400 text-justify mt-3">${quali.description}</p>
        <p class="text-base font-light text-gray-800 dark:text-gray-400">
            <span title="${instituteName}">${quali.institute.shortName}</span> &bull; ${quali.institute.duration}
        </p>
    </li>`;
});

parent.innerHTML = html.join("");
