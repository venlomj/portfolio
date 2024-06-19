import { FC, ReactNode, useState } from "react";
import Header from "./header";
import Video from "./video";
import ProjectModal from "@/components/ui/modal/ProjectModal";

interface FeaturedCardProps {
  logo?: ReactNode;
  title: string;
  tag: string;
  video: string;
  active: boolean;
  desc: string;
  client: string;
}

const FeaturedCard: FC<FeaturedCardProps> = ({
  logo,
  title,
  tag,
  video,
  desc,
  client,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        className="link w-full h-full bg-secondary-background border border-border 
    shadow-lg rounded-3xl cursor-pointer flex flex-col gap-2 flex-nowrap p-2"
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        {/* Header */}
        <div onClick={handleOpenModal}>
          <Header title={title} tag={tag} />
        </div>
        {/* Body */}
        <div
          className="relative flex
       float-none flex-nowrap
        p-6 w-full items-center
         justify-center h-[550px]
         border border-border rounded-3xl"
        >
          {/* Video */}
          <Video video={video} active={isActive} />
        </div>
      </div>
      {/* Modal */}
      <ProjectModal
        title={title}
        isOpen={isModalOpen}
        handleClose={handleCloseModal}
      >
        <dl className="my-3 shadow-md rounded-lg p-6 bg-secondary-background max-w-2xl mx-auto">
          <dt className="text-sm text-secondary-foreground mt-4 font-pixel">
            Opdracht
          </dt>
          <dd className="mt-2 text-base">{desc}</dd>
          <dt className="text-sm text-secondary-foreground mt-4 font-pixel">
            Opdrachtgever
          </dt>
          <dd className="mt-2 text-base">{client}</dd>
        </dl>

        {/* Include any additional details about the project */}
      </ProjectModal>
    </>
  );
};

export default FeaturedCard;
