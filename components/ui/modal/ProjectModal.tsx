import ReactPortal from "@/components/util/portal/ReactPortal";
import { FC, ReactNode, useEffect, useRef } from "react";
import Card from "../Card";
import Button from "../Button";
import { IoIosCloseCircle } from "react-icons/io";
import { FaRegWindowClose, FaWindowClose } from "react-icons/fa";
import FlexibleButton from "../FlexibleButton";
import DynamicButton from "../DynamicButton";
import Header from "@/components/cards/featured/header";

interface ProjectModalProps {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  title: string;
}

const ProjectModal: FC<ProjectModalProps> = ({
  children,
  isOpen,
  handleClose,
  title,
}) => {
  //   const btnRef = useRef<HTMLButtonElement>(null);

  //   // close modal when press escape
  //   useEffect(() => {
  //     const closeOnEscapeKey = (e: KeyboardEvent) => {
  //       e.key == "Escape" ? handleClose() : null;
  //       document.body.addEventListener("keydown", closeOnEscapeKey);
  //       return () => {
  //         document.body.removeEventListener("keydown", closeOnEscapeKey);
  //       };
  //     };
  //   }, [handleClose]);
  // Close modal when press escape
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  //   // disable scroll on modal load
  //   useEffect(() => {
  //     document.body.style.overflow = "hidden";
  //     return (): void => {
  //       document.body.style.overflow = "unset";
  //     };
  //   }, [isOpen]);
  // Manage overflow on body when modal is open/closed
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to reset overflow when component unmounts or isOpen changes
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="project-modal">
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="absolute inset-0 bg-[#01010A] text-primary-foreground overflow-auto">
          <div className="absolute top-4 right-8 text-white hover:text-gray-900">
            <button
              className="text-3xl leading-none"
              onClick={handleClose}
              aria-label="Close"
            >
              &times;
            </button>
          </div>
          <Card className="w-full h-full flex flex-col p-0 items-center justify-center">
            <div className="p-6 flex-grow">
              {/* <div className="font-pixel uppercase text-lg border-b border-border pb-4 mb-4"> */}
              <div className="font-pixel">
                <Header title={title} />
              </div>
              {/* </div> */}
              <div className="pb-4 flex-grow">{children}</div>
              <div className="border-t border-border pt-4">
                <DynamicButton
                  onClick={handleClose}
                  className="flex items-center justify-center gap-2 bg-[#FFFFFF66] rounded-full select-none whitespace-nowrap text-primary-foreground text-sm font-medium hover:bg-[#FFFFFF80] hover:text-black transition-colors duration-100 w-20 h-15"
                >
                  Close
                </DynamicButton>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </ReactPortal>
  );
};

export default ProjectModal;
