import { Button } from "@/components/ui/button";
import * as Icons from "lucide-react";
import { servicesHeroData } from "@/constants/data";
import ServiceForm from "../../Forms/ServiceForm";

export default function ServiceHero({
  icon = servicesHeroData.icon,
  label = servicesHeroData.label,
  title = servicesHeroData.title,
  description = servicesHeroData.description,
  buttonText = servicesHeroData.buttonText,
  imageDesktop = servicesHeroData.imageDesktop,
  imageMobile = servicesHeroData.imageMobile,
}) {
  // dynamically pick lucide-react icon
  const IconComponent = Icons[icon] || Icons.User2;

  return (
    <>
      <section className="-mt-4 relative w-full overflow-hidden bg-gradient-to-b from-[#ffffff] to-[#e3fcfb]">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-2 px-6 lg:px-0 pt-3 -lg:pt-0 relative z-0">
          {/* Left Content */}
          <div className="max-w-xl text-center lg:text-left space-y-5 mx-auto lg:mx-12">
            {/* Small Label */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600 text-sm font-medium">
              <IconComponent className="h-4 w-4" />
              <span>{label}</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              {title}
            </h1>

            {/* Subtext */}
            <p className="text-gray-700 text-base leading-relaxed">
              {description}
            </p>

            {/* Button */}
            <div className="flex justify-center lg:justify-start">
              <a href="https://d2oe0ra32qx05a.cloudfront.net/?practiceKey=k_1_101680"
               target="_blank"
               rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="rounded-full px-6 py-7 flex items-center gap-2 bg-[#3E757B] hover:bg-[#3E757B] text-white"
                >
                  {buttonText}
                  <span className="rounded-full bg-white p-2">
                    <Icons.ArrowRight className="h-5 w-5 text-black" />
                  </span>
                </Button>
              </a>

            </div>
          </div>


          {/* Right Image with Form overlay */}
          <div className="relative w-full flex justify-center">
            <div className="relative w-full">
              {/* Desktop Image */}
              <img
                src={imageDesktop}
                alt={title}
                className="hidden sm:block rounded-lg object-cover w-full h-full max-h-[500px] lg:max-h-[600px]"
              />
              {/* Mobile Image */}
              <img
                src={imageMobile}
                alt={title + ' Mobile'}
                className="block sm:hidden rounded-lg object-cover w-full h-full max-h-[600px]"
              />

              {/* Service Form overlay (desktop only) */}
              <div className="hidden lg:block absolute top-4 -bottom-14 left-1/2 transform -translate-y-1 -translate-x-24 w-[380px] z-10">
                <ServiceForm />
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* Curved bottom (hidden on mobile) */}
      {/* <div
        aria-hidden="true"
        className="hidden sm:flex"
        style={{
          position: "relative",
          top: -155,
          left: 0,
          width: "100%",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "10%",
          overflow: "hidden",
          zIndex: 2,
          border: "none",
        }}
      >
        <svg
          width="auto"
          height="auto"
          viewBox="0 0 1440 375"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0L360 90C596.363 149.091 843.637 149.091 1080 90L1440 0L1660 265L1190 315C881.613 393.737 558.387 393.737 250 315L-220 265L0 0Z"
            fill="#e3fcfb"
          />
        </svg>
      </div> */}

    </>
  );
}
