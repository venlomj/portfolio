import { FaUser, FaPhoneVolume, FaProjectDiagram } from "react-icons/fa";
import { MdEmail, MdSubject } from "react-icons/md";
import ContactCard from "@/components/cards/contact";
import Heading from "@/components/heading/heading";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/inputs";
import Button from "@/components/ui/Button";
import TextArea from "@/components/ui/text-area";
import { SiMinutemailer } from "react-icons/si";
import { budgetOptions, servicesOptions } from "@/data";
import { useState } from "react";
import SelectInput from "@/components/ui/select-input";

export default function ContactSection() {
  const [services, setServices] = useState<string[]>([]);

  const [budgets, setBudgets] = useState<string[]>([]);

  return (
    <div className="pt-24 px-3 lg:px-8">
      <Heading number="03" title1="Contact" title2="Me" />
      <Card>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact cards */}
          <div className="flex flex-col gap-8">
            <ContactCard
              title="Call me directly at"
              icon={<FaPhoneVolume className="fill-[#333] text-lg" />}
              text="+32 474 24 48 07"
              btnText="Call me"
            />
            <ContactCard
              title="Send me an email"
              icon={<MdEmail className="fill-[#333] text-lg" />}
              text="venlo.mj@hotmail.nl"
              btnText="Email me"
            />
          </div>
          {/* Contact form */}
          <div className="lg:col-span-2 bg-secondary-background border border-border rounded-lg space-y-3 relative overflow-hidden py-5 px-[25px] shadow-md">
            <div className="flex flex-col lg:flex-row items-center justify-between mb-4 gap-8">
              <Input type="text" placeholder="Full Name" icon={<FaUser />} />
              <Input
                type="email"
                placeholder="Email Address"
                icon={<MdEmail />}
              />
            </div>
            <div className="flex items-center justify-between mb-4 gap-8">
              <Input type="text" placeholder="Subject" icon={<MdSubject />} />
            </div>
            {/* Multiple select wrapper */}
            <div className="flex flex-col gap-6">
              <div className="space-y-6">
                <h1 className="font-bold text-lg">
                  What services are in need for ?
                </h1>
                <div className="flex flex-wrap items-center justify-between mb-4 gap-8">
                  {/* Services */}
                  {servicesOptions.map((service) => (
                    <SelectInput
                      key={service.id}
                      type="checkbox"
                      id={service.id}
                      text={service.text}
                      selectedOptions={services}
                      setSelectedOptions={setServices}
                      allowMultiple
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Multiple select wrapper */}
            <div className="flex flex-col gap-6">
              <div className="space-y-6">
                <h1 className="font-bold text-lg">What is your budget ?</h1>
                <div className="flex flex-wrap items-center justify-between mb-4 gap-8">
                  {/* Budget options */}
                  {budgetOptions.map((budget) => (
                    <SelectInput
                      key={budget.id}
                      type="radio"
                      id={budget.id}
                      text={budget.text}
                      selectedOptions={budgets}
                      setSelectedOptions={setBudgets}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* TextArea message */}
            <TextArea
              placeholder="Tell me about your project"
              icon={<FaProjectDiagram />}
            />
            <div className="w-full flex justify-end">
              <Button className="!w-44 !py-3 !text-xl">
                Send
                <SiMinutemailer />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
