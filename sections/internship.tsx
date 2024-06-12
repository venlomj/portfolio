import FeaturedCard from "@/components/cards/featured/featured-card";
import InternshipCard from "@/components/cards/internship/internship-card";
import ExpandableFeatured from "@/components/expandables/expandable-featured";
import Heading from "@/components/heading/heading";
import { internshipData } from "@/data";
// import LogoQubris from "@/public/assets/images/interbship/Qubris_logo.png";
// import Image from "next/image";

const MainInternship: any = internshipData[1];

export default function InternshipSection() {
  return (
    <div className="pt-24 px-3 lg:px-8 text-primary-foreground">
      {/* Heading */}
      <Heading number="02" title1="Mijn" title2="Stage" />

      <InternshipCard
        id={MainInternship.id}
        intro={MainInternship.intro}
        company={MainInternship.company}
        assignment={MainInternship.assignment}
        app={MainInternship.app}
        description={MainInternship.description}
        info={MainInternship.info}
      />
      <div className="mt-24">
        <ExpandableFeatured />
      </div>
    </div>
  );
}
// import Heading from "@/components/heading/heading";
// import { internshipData } from "@/data";
// import FeaturedCard from "@/components/cards/featured/featured-card";
// import ExpandableFeatured from "@/components/expandables/expandable-featured";

// const MainInternship: any = internshipData[1];

// export default function InternshipSection() {
//   return (
//     <div className="pt-24 px-3 lg:px-8">
//       {/* Heading */}
//       <Heading number="01" title1="Mijn" title2="Stage" />
//       {/* Main featured Card */}
//       <FeaturedCard
//         active
//         title={MainInternship.company}
//         tag={MainInternship.assignment}
//         video={MainInternship.app}
//       />
//       <div className="mt-24">
//         <ExpandableFeatured />
//       </div>
//     </div>
//   );
// }
