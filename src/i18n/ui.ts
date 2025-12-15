export const languages = {
  en: "English",
  es: "Español",
}

export const defaultLang = "en"

export const ui = {
  en: {
    greeting: "Hello World!",
    about_me: `My name is <b class="dark:text-[#d3862e] underline">Daniel Martínez</b>,
        Software development enthusiast, specialized in backend and frontend projects. 
        Experienced in technologies such as Angular.js, React.js, TypeScript, JavaEE with 
        Spring Boot, DBMS, and cloud providers such as GCP and AWS in the near future. 
        Passionate about contributing and learning through Open Source projects.
        `,
    find_me_on: "Find me on",
    recent_projects: `<b class="font-[700] dark:text-[#d3862e]">Recent</b> Projects`,
    all_projects: "All projects",
    skills: "Skills",
    skills_description: `        These are some of the most <b class="dark:text-[#d3862e] underline">relevant</b> in both front-end and back-end web development.`,
  },
  es: {
    greeting: "¡Hola Mundo!",
    about_me: `Mi nombre es <b class="dark:text-[#d3862e] underline">Daniel Martínez</b>. Entusiasta del desarrollo de software, especializado en proyectos backend y frontend. Experiencia en tecnologías como Angular.js, React.js, TypeScript, JavaEE con Spring Boot, DBMS y proveedores de nube como GCP y AWS, próximamente. Apasionado por contribuir y aprender a través de proyectos de código abierto.
      `,
    find_me_on: "Mis redes",
    recent_projects: `<b class="font-[700] dark:text-[#d3862e]">Proyectos</b> recientes`,
    all_projects: "Todos los proyectos",
    skills: "Habilidades",
    skills_description: `Estas son algunas de las más <b class="dark:text-[#d3862e] underline">relevantes</b> en el desarrollo web tanto del lado del cliente como del servidor.`,
  },
} as const
