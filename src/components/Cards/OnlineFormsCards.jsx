import { ArrowRight } from "lucide-react";

const OnlineFormsCards = ({ onlineForms, variant = "default" }) => {
  return (
    <div
      className={`relative rounded-2xl p-6 flex flex-col h-full ${onlineForms.bgColor} ${onlineForms.textColor}`}
    >
      {/* Featured Card (Image as Background) */}
      {variant === "featured" && onlineForms.image && (
        <div className="absolute inset-0">
          <img
            src={onlineForms.image}
            alt={onlineForms.title}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 rounded-2xl bg-black/20" /> 
          {/* optional dark overlay */}
        </div>
      )}

      {/* Content Layer */}
      <div
        className={`relative z-10 ${
          variant === "featured"
            ? "h-full flex flex-col justify-end"
            : "flex items-center justify-between"
        }`}
      >
        {/* Text Section */}
        <div className={variant === "featured" ? "" : "flex-1"}>
          <h3
            className={`font-bold ${
              variant === "featured" ? "text-2xl md:text-3xl" : "text-lg"
            }`}
          >
            {onlineForms.title}
          </h3>
          {onlineForms.description && (
            <p className="mt-2 text-sm">{onlineForms.description}</p>
          )}
          <button
            className={`mt-3 inline-flex items-center font-medium ${
              variant === "featured"
                ? "text-sm bg-white/20 px-4 py-2 rounded-full hover:bg-white/30"
                : "text-xs hover:underline"
            }`}
          >
            Fill Form <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        {/* Right-side Image for Normal Cards */}
        {variant !== "featured" && onlineForms.image && (
          <div className="flex-shrink-0 ml-4">
            <img
              src={onlineForms.image}
              alt={onlineForms.title}
              className="h-48 w-auto object-contain object-right"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default OnlineFormsCards;
