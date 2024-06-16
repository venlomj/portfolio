import Image from "next/image";
import Card from "../ui/Card";
import SignatureImg from "@/public/assets/images/profile/signature.png";
import Button from "../ui/Button";
import { FaDownload } from "react-icons/fa";
import Socials from "../ui/socials";
import { downloadFile } from "@/utils/downloadable";
import DownloadButton from "../ui/DownloadButton";

export default function ResumeCard() {
  const handleDownload = () => {
    const fileUrl = "/assets/cv/cv_murrel_venlo.pdf";
    const filename = "cv_murrel_venlo.pdf";
    downloadFile(fileUrl, filename);
  };
  return (
    <Card className="md:h-full">
      <p className="text-lg xl:text-xl font-medium text-primary-foreground">
        Vijf jaar geleden ben ik naar België gekomen om IT te studeren en mij te
        verdiepen in het programmeren. Twee jaar geleden heb ik de
        Graduaatsopleiding, Programmeren succesvol afgerond en doe momenteel het
        verkorte traject van de IT-Factory, Appliaction Development. Ik heb deze
        keuze gemaakt omdat deze richting aan de universiteit van Paramaribo
        niet voldoende wordt aangeboden. Ik woon momenteel in Laakdal. Wil je
        echt meer te weten komen over mij, kan je mij persoonlijk contacteren.
      </p>
      {/* Signature */}
      <div>
        <Image src={SignatureImg} alt="venlomj" />
      </div>
      {/* Socials and resume btn*/}
      <div className="flex items-center justify-between md:bottom-6 md:left-6 md:w-[calc(100%-48px)]">
        {/* Socials */}
        <Socials />
        <div onClick={handleDownload}>
          <Button>
            <FaDownload />
            Resume
          </Button>
        </div>
      </div>
    </Card>
  );
}
