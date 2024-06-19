import Heading from "@/components/heading/heading";
import { featuredData } from "@/data";
import FeaturedCard from "@/components/cards/featured/featured-card";
import ExpandableFeatured from "@/components/expandables/expandable-featured";
import { FiArrowDownCircle, FiArrowUpRight } from "react-icons/fi";

const MainFeatured = featuredData[0];

export default function FeaturedSection() {
  return (
    <div className="pt-24 px-3 lg:px-8">
      {/* Heading */}
      <Heading number="01" title1="Projecten" title2=" " />
      {/* Main featured Card */}
      <FeaturedCard
        active
        title={MainFeatured.title}
        tag={MainFeatured.tag}
        video={MainFeatured.video}
        desc={MainFeatured.desc!}
        client={MainFeatured.client!}
      />
      <div className="mt-24">
        <ExpandableFeatured />
      </div>
      {/* "Meer projecten" section */}
      <div className="mt-12 text-center">
        <p className="text-lg text-primary-foreground">
          Ontdek meer projecten:
        </p>
        <a
          href="https://venlomj.sinners.be/pages/Portfolio.html"
          target="_blank"
          className="inline-block mt-2 text-primary-foreground transition-colors duration-300 hover:text-accent hover:bg-secondary-background focus:text-accent focus:bg-secondary-background rounded-full py-1 px-4"
        >
          Bekijk alles{" "}
          <FiArrowUpRight className="inline-block ml-1" size={18} />
        </a>
      </div>
    </div>
  );
}
