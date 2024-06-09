import Card from "@/components/ui/Card";
import PdfListItem from "@/components/ui/pdf-list-item";
import { reportsData } from "@/data";
import { FC } from "react";
import Header from "../header";

const Reports: FC = () => {
  return (
    <Card className="bg-transparent border border-[#797CBB]">
      <Header title="Mijn bewijsstukken" />
      <ul>
        {reportsData.map((report) => (
          <PdfListItem key={report.id} title={report.title}>
            <a href={report.location} target="_blank" rel="noopener noreferrer">
              {report.title}
            </a>
          </PdfListItem>
        ))}
      </ul>
    </Card>
  );
};

export default Reports;
