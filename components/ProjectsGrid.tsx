"use client";
import { useState } from "react";
import { Project, Service } from "@/lib/services";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { RevealOnScroll } from "@/components/RevealOnScroll";

interface Props {
  service: Service;
}

export function ProjectsGrid({ service }: Props) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[.05]">
        {service.projects.map((project, i) => (
          <RevealOnScroll key={project.id} delay={i * 100}>
            <ProjectCard
              project={project}
              index={i}
              onClick={() => setActiveProject(project)}
            />
          </RevealOnScroll>
        ))}
      </div>

      {/* Modal — rendered outside grid so z-index works */}
      <ProjectModal
        project={activeProject}
        serviceTitle={service.title}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
}
