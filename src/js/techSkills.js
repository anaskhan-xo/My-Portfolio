const techSkills = [
    {
        title: "Languages",
        skills: [
            { icon: `<i class="fab fa-js-square text-[#f7df1e]"></i>`, name: "JavaScript" },
            { icon: `<i class="fas fa-code text-[#3178c6]"></i>`, name: "TypeScript" },
            { icon: `<i class="fab fa-python text-[#3776AB]"></i>`, name: "Python" },
            { icon: `<i class="fab fa-html5 text-[#e34c26]"></i>`, name: "HTML" },
            { icon: `<i class="fab fa-css3-alt text-[#1572b6]"></i>`, name: "CSS" }
        ]
    },
    {
        title: "Frameworks and Libraries",
        skills: [
            { icon: `<i class="fab fa-react text-[#61dafb]"></i>`, name: "React" },
            { icon: `<i class="fab fa-react text-black"></i>`, name: "Next.js" },
            { icon: `<i class="fab fa-node-js text-[#339933]"></i>`, name: "Node.js" },
            { icon: `<i class="fab fa-node-js text-[#000000]"></i>`, name: "Express" },
            { icon: `<i class="fas fa-flask text-[#000000]"></i>`, name: "Flask" },
            { icon: `<i class="fas fa-code text-[#009688]"></i>`, name: "FastAPI" },
            { icon: `<i class="fas fa-wind text-[#38bdf8]"></i>`, name: "Tailwind" },
            { icon: `<i class="fas fa-comments text-indigo-600"></i>`, name: "Chainlit" },
            { icon: `<i class="fas fa-desktop text-cyan-600"></i>`, name: "Streamlit" }
        ]
    },
    {
        title: "Tools & Utilities",
        skills: [
            { icon: `<i class="fab fa-git-alt text-[#f05032]"></i>`, name: "Git" },
            { icon: `<i class="fab fa-github text-[#181717]"></i>`, name: "GitHub" },
            { icon: `<i class="fas fa-laptop-code text-[#000000]"></i>`, name: "Vercel" },
            { icon: `<i class="fas fa-plug text-[#00aced]"></i>`, name: "WebSockets" },
            { icon: `<i class="fas fa-key text-[#0f62fe]"></i>`, name: "JWT" },
            { icon: `<i class="fas fa-paper-plane text-orange-500"></i>`, name: "Postman" }
        ]
    },
    {
        title: "Databases",
        skills: [
            { icon: `<i class="fas fa-database text-[#47A248]"></i>`, name: "MongoDB" },
            { icon: `<i class="fas fa-database text-[#00758F]"></i>`, name: "MySQL" },
            { icon: `<i class="fas fa-database text-[#336791]"></i>`, name: "PostgreSQL" },
            { icon: `<i class="fas fa-cube text-[#0ea5e9]"></i>`, name: "Vector DB " }
        ]
    },
    {
        title: "Agentic AI",
        skills: [
            { icon: `<i class="fas fa-robot text-purple-700"></i>`, name: "OpenAI Agents SDK" },
            { icon: `<i class="fas fa-tools text-orange-500"></i>`, name: "Tool Calling" },
            { icon: `<i class="fas fa-database text-green-600"></i>`, name: "RAG" },
            { icon: `<i class="fas fa-memory text-pink-600"></i>`, name: "Short-term Memory" },
            { icon: `<i class="fas fa-memory text-pink-400"></i>`, name: "Long-term Memory" },
            { icon: `<i class="fas fa-brain text-red-600"></i>`, name: "Fine-tuning" },
            { icon: `<i class="fas fa-bolt text-yellow-500"></i>`, name: "Dynamic Tasks" },
            { icon: `<i class="fas fa-cogs text-gray-700"></i>`, name: "Agent Communication" },
            { icon: `<i class="fas fa-shield-alt text-blue-500"></i>`, name: "Guardrails" },
            { icon: `<i class="fas fa-stream text-green-500"></i>`, name: "Streaming" },
            { icon: `<i class="fas fa-project-diagram text-purple-600"></i>`, name: "MCP" },
            { icon: `<i class="fas fa-server text-orange-400"></i>`, name: "LiteLLM" },
            { icon: `<i class="fas fa-location-arrow text-red-500"></i>`, name: "Local Context" },
            { icon: `<i class="fas fa-brain text-indigo-600"></i>`, name: "Agent/LLM Context" }
        ]
    },
    {
        title: "Cloud",
        skills: [
            { icon: `<i class="fab fa-microsoft text-[#0078D4]"></i>`, name: "Azure" },
            { icon: `<i class="fab fa-docker text-blue-600"></i>`, name: "Docker" },
            { icon: `<i class="fas fa-layer-group text-red-500"></i>`, name: "Docker Compose" },
            { icon: `<i class="fas fa-server text-orange-400"></i>`, name: "Kubernetes" },
            { icon: `<i class="fas fa-cloud text-[#00c2ff]"></i>`, name: "Cloud Functions" },
            { icon: `<i class="fas fa-server text-[#6f42c1]"></i>`, name: "Serverless" },
            { icon: `<i class="fas fa-tools text-[#f97316]"></i>`, name: "CI/CD" },
            { icon: `<i class="fab fa-github text-[#181717]"></i>`, name: "GitHub Actions" },
            { icon: `<i class="fas fa-network-wired text-[#14b8a6]"></i>`, name: "IaC" },
            { icon: `<i class="fas fa-cloud-upload-alt text-[#10b981]"></i>`, name: "Terraform" },
            { icon: `<i class="fas fa-code-branch text-[#9ca3af]"></i>`, name: "Pulumi" },
            { icon: `<i class="fas fa-project-diagram text-[#2563eb]"></i>`, name: "Cloud Native Arch" },
            { icon: `<i class="fas fa-network-wired text-gray-700"></i>`, name: "DACA" },
            { icon: `<i class="fas fa-cogs text-blue-500"></i>`, name: "Dapr" }
        ]
    },
    
];



const parent = document.getElementById("tech-skills");

const slugify = (text) => text.toLowerCase().replace(/\s+/g, '-');

const getSkill = (skills) => {
  const skillHtml = skills.map(skill =>
    `<li class="flex items-center gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 min-h-[64px] overflow-hidden" tabindex="0" aria-label="${skill.name}">
      <span class="text-2xl flex-shrink-0" aria-hidden="true">${skill.icon}</span>
      <span class="text-gray-800 dark:text-gray-400 text-justify truncate w-full" title="${skill.name}">
        ${skill.name}
      </span>
    </li>`
  );
  return `<ul role="list" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0 m-0">${skillHtml.join('')}</ul>`;
};

const html = techSkills.map(tech =>
  `<section aria-labelledby="section-${slugify(tech.title)}" class="mb-8">
    <h2 id="section-${slugify(tech.title)}" class="text-xl font-medium text-gray-800 dark:text-gray-100 mb-4">
      ${tech.title}
    </h2>
    ${getSkill(tech.skills)}
  </section>`
);

parent.innerHTML = html.join('');