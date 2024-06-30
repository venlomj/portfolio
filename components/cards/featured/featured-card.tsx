import { FC, ReactNode, useState } from "react";
import Header from "./header";
import Video from "./video";
import ProjectModal from "@/components/ui/modal/ProjectModal";
import Image from "next/legacy/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface FeaturedCardProps {
  logo?: ReactNode;
  title: string;
  tag: string;
  video: string;
  active: boolean;
  desc: string;
  client: string;
  img?: string | StaticImport;
  info?: boolean;
}

const FeaturedCard: FC<FeaturedCardProps> = ({
  logo,
  title,
  tag,
  video,
  desc,
  client,
  img,
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
        <Header
          title={title}
          tag={tag}
          showInfoIcon={true}
          onInfoClick={handleOpenModal}
        />
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
          <div className="flex justify-center mb-4">
            <Image
              src={img!}
              alt={title}
              width={400}
              height={200}
              className="object-contain"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
          <dt className="text-sm text-secondary-foreground mt-4 font-pixel">
            Opdracht
          </dt>
          <dd className="mt-2 text-base">{desc}</dd>
          <dt className="text-sm text-secondary-foreground mt-4 font-pixel">
            Opdrachtgever
          </dt>
          <dd className="mt-2 text-base">{client}</dd>
        </dl>
      </ProjectModal>
    </>
  );
};

export default FeaturedCard;
