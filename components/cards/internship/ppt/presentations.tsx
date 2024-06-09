import PdfListItem from "@/components/ui/pdf-list-item";
import presentationData from "@/data/presentation";
import React, { FC } from "react";
import Header from "../header";
import Card from "@/components/ui/Card";
import PPTListItem from "@/components/ui/svg/ppt-list-item";

const Presentation: FC = () => {
  return (
    <Card className="bg-transparent border border-[#797CBB]">
      <Header title="Mijn presentaties" />
      <ul>
        {presentationData.map((ppt) => (
          <PPTListItem key={ppt.id} title={ppt.title}>
            <a href={ppt.location} target="_blank" rel="noopener noreferrer">
              {ppt.title}
            </a>
          </PPTListItem>
        ))}
      </ul>
    </Card>
  );
};

export default Presentation;
