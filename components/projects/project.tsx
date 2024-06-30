import { useState } from "react";
import ProjectModal from "../ui/modal/ProjectModal";
import { title } from "process";

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div>
      <button onClick={handleOpenModal}>Open Project Modal</button>
      <ProjectModal
        isOpen={isModalOpen}
        handleClose={handleCloseModal}
        title={title}
      >
        <ul>
          <li>Achievements</li>
          <li>Hackathons, badges from online courses,...</li>
          <li>Showcase other projects</li>
          <li>Other awesome school projects or extracurricular work</li>
          <li>What do you excel at? What are your passions?</li>
          <li>Provide context</li>
          <li>Summary and conclusion</li>
          <li>Focus on the ‘What’ and ‘How’</li>
          <li>Make it tangible</li>
          <li>
            Use visual aids: include screenshots, movies, reports, code
            repos,...
          </li>
          <li>Result of teamwork?</li>
          <li>Make sure you highlight your own contribution</li>
          <li>Give credit where credit is due</li>
        </ul>
      </ProjectModal>
    </div>
  );
};

export default Project;
