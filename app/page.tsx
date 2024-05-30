"use client";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import WatarWaveWrapper from "@/components/visual-effects/watar-wave-wrapper";
import { IoHome } from "react-icons/io5";
import { FaArrowRight, FaUserAlt } from "react-icons/fa";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import Profile from "@/components/ui/Profile";
import FancyButton from "@/components/ui/FancyButton";
import LiveClock from "@/components/ui/LiveClock";
import MagneticWrapper from "@/components/visual-effects/MagneticWrapper";
import ScrollDown from "@/components/ui/ScrollDown";

export default function Home() {
  return (
    <WatarWaveWrapper
      imageUrl=""
      dropRadius="3"
      perturbance="3"
      resolution="2048"
    >
      {() => (
        <div className="w-full p-10">
          <div className="max-w-2xl mx-auto">
            <br />
            <Card title="Ui Component">
              <div className="grid grid-cols-4">
                <Button>
                  <IoHome />
                  Basic button
                </Button>
                <Button isIcon>
                  <FaUserAlt />
                </Button>
                <Button link="https://github.com/murrelvenlo/portfolio">
                  Github
                </Button>
              </div>
              <Input type="text" placeholder="Full name" />
              <Input type="text" placeholder="Full name" icon={<FaUserAlt />} />
              <TextArea placeholder="Full name" />
              <TextArea placeholder="Full name" icon={<FaUserAlt />} />
              <Profile />
              <MagneticWrapper className="w-[350px]">
                <FancyButton text="Contact me" icon={<FaArrowRight />} />
              </MagneticWrapper>
              <LiveClock timeZone="CEST/Brussels" />
              <MagneticWrapper>
                <ScrollDown />
              </MagneticWrapper>
            </Card>
          </div>
        </div>
      )}
    </WatarWaveWrapper>
  );
}
