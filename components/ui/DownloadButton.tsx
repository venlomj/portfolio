import { downloadFile } from "@/utils/downloadable";
import { FC } from "react";
import { FaDownload } from "react-icons/fa";

const DownloadButton: FC = () => {
  const handleDownload = () => {
    const fileUrl = "/assets/cv/cv_murrel_venlo.pdf";
    const filename = "cv_murrel_venlo.pdf";
    downloadFile(fileUrl, filename);
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center gap-x-2 h-8 px-4 bg-secondary-background text-white rounded-3xl"
    >
      <FaDownload />
      <span>Mijn cv</span>
    </button>
  );
  //   return (
  //     <button onClick={handleDownload} className="min-w-[150px]">
  //       <span className="flex gap-x-2 items-center justify-center h-8 bg-secondary-background text-white rounded-3xl px-4">
  //         <FaDownload />
  //         Mijn cv
  //       </span>
  //     </button>
  //   );
};
export default DownloadButton;
