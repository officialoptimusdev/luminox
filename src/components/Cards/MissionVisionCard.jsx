import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom"; 

export default function MissionVisionCard({
  title,
  description,
  image,
  buttonLabel,
  buttonVariant = "default",
  reverse = false,
  buttonType = "internal", 
  buttonHref = "/",        
}) {
  return (
    <div className="w-full flex justify-center px-4">
      <div
        className={cn(
          "flex flex-col md:flex-row items-stretch md:gap-6 gap-8 max-w-6xl w-full",
          reverse && "md:flex-row-reverse"
        )}
      >
        {/* IMAGE CARD */}
        <Card
          className={cn(
            "rounded-2xl shadow-sm w-fit border-none flex items-stretch",
            "mx-auto md:mx-0"
          )}
        >
          <CardContent className="p-6 flex items-center justify-center bg-[#91bfc61d]">
            <img
              src={image}
              alt={title}
              className="h-60 sm:h-72 md:h-80 w-auto object-contain"
            />
          </CardContent>
        </Card>

        {/* TEXT CARD */}
        <Card className="rounded-2xl shadow-sm border-none flex-1 flex items-stretch relative">
          <img
            src="/assets/about-card-top.png"
            alt=""
            aria-hidden="true"
            className="object-contain pointer-events-none select-none absolute -top-6 -left-6 w-[286px] sm:w-[344px] md:w-[572px] max-w-[45%] opacity-100 bg-[#91bfc61d]"
          />

          <img
            src="/assets/about-card-bottom.png"
            alt=""
            aria-hidden="true"
            className="object-contain pointer-events-none select-none absolute -bottom-4 -right-4 w-[190px] sm:w-[228px] md:w-[380px] max-w-[40%] opacity-100 bg-[#91bfc61d]"
          />

          <CardContent
            className={cn(
              "p-6 sm:p-8 flex flex-col justify-center w-full",
              "mx-auto md:ml-0 md:mr-0"
            )}
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
              {title}
            </h3>
            <p className="text-gray-600 mb-6">
              {description}
            </p>

            {/* BUTTON HANDLING */}
            {buttonType === "internal" ? (
              <Link to={buttonHref}>
                <Button
                  variant={buttonVariant}
                  className="w-fit rounded-full gap-2"
                >
                  {buttonLabel} <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            ) : (
              <a
                href={buttonHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant={buttonVariant}
                  className="w-fit rounded-full gap-2"
                >
                  {buttonLabel} <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
