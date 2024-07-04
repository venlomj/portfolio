import Image from "next/legacy/image";
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
        Vijf jaar geleden ben ik vanuit Suriname naar België gekomen om IT te
        studeren. Ik heb deze keuze gemaakt omdat sommige specialisaties aan de
        universiteit van Paramaribo niet worden aangeboden. Ik ben gestart met
        de Graduaatopleiding Programmeren en heb deze succesvol afgerond. Daarna
        heb ik het verkorte Bachelor-traject IT-Factory, Appliaction Development
        aangevat. Sind juni 2024 ben ik afgestudeerd als Bachelor aan de Thomas
        More Hogeschool te Geel.
      </p>
      {/* Signature */}
      <div>
        <Image
          src={SignatureImg}
          alt="venlomj"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
      {/* Socials and resume btn*/}
      <div className="flex items-center justify-between md:bottom-6 md:left-6 md:w-[calc(100%-48px)]">
        {/* Socials */}
        <Socials />
        <div onClick={handleDownload}>
          <Button>
            <FaDownload />
            CV
          </Button>
        </div>
      </div>
    </Card>
  );
}
