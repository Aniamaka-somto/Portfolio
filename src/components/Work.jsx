import React from "react";
import ProjectCard from "./ProjectCard";

const Work = () => {
  const works = [
    {
      imgSrc: "/src/assets/project-1.jpg",
      title: "Full stack music app",
      tags: ["API", "MVC", "Development"],
      projectLink: "/",
    },
    {
      imgSrc: "/src/assets/project-2.jpg",
      title: "Free stock photo app",
      tags: ["API", "SPA"],
      projectLink: "/",
    },
    {
      imgSrc: "/src/assets/project-3.jpg",
      title: "Recipe app",
      tags: ["Development", "API"],
      projectLink: "/",
    },
    {
      imgSrc: "/src/assets/project-4.jpg",
      title: "Real state website",
      tags: ["Web-design", "Development"],
      projectLink: "/",
    },
    {
      imgSrc: "/src/assets/project-5.jpg",
      title: "eCommerce website",
      tags: ["eCommerce", "Development"],
      projectLink: "/",
    },
    {
      imgSrc: "/src/assets/project-6.jpg",
      title: "vCard Personal portfolio",
      tags: ["Web-design", "Development"],
      projectLink: "/",
    },
  ];
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-2 reveal-up">Featured projects</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              img={imgSrc}
              title={title}
              tags={tags}
              link={projectLink}
              key={key}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
