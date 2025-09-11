import { Download } from "lucide-react";

const DownloadFormsCards = ({ downloadForms, variant }) => {
  if (variant === "featured") {
    return (
      <div
        className={`relative rounded-2xl p-6 flex flex-col h-full ${downloadForms.bgColor} ${downloadForms.textColor}`}
      >
        {downloadForms.image && (
          <div className="absolute inset-0">
            <img
              src={downloadForms.image}
              alt={downloadForms.title}
              className="w-full h-full object-cover object-center rounded-2xl"
            />
            <div className="absolute inset-0 bg-black/20 rounded-2xl" />
          </div>
        )}

        {/* Content pinned to bottom */}
        <div className="relative z-10 h-full flex flex-col justify-end">
          <h3 className="text-2xl md:text-3xl font-bold leading-tight">
            {downloadForms.title}
          </h3>
          <p className="mt-2 text-sm">{downloadForms.description}</p>
          <a
            href={downloadForms.url}
            target="_blank"
            className="mt-4 inline-flex items-center text-sm font-medium bg-white/20 px-4 py-2 rounded-full hover:bg-white/30"
          >
            Download <Download className="ml-2 w-4 h-4" />
          </a>

        </div>
      </div>
    );
  }

  if (variant === "card") {
    // Right-hand cards (keep current styling: text left, image right)
    return (
      <div
        className={`rounded-2xl p-6 flex items-center justify-between h-full ${downloadForms.bgColor} ${downloadForms.textColor}`}
      >
        <div className="flex-1">
          <h3 className="text-lg font-semibold leading-tight">
            {downloadForms.title}
          </h3>
          <p className="mt-1 text-sm opacity-80">{downloadForms.description}</p>
          <a
            href={downloadForms.url}
            target="_blank"
            className="mt-3 inline-flex items-center text-xs font-medium hover:underline"
          >
            Download <Download className="ml-1 w-3 h-3" />
          </a>

        </div>
        {downloadForms.image && (
          <img
            src={downloadForms.image}
            alt={downloadForms.title}
            className="h-48 w-auto object-contain object-right ml-4"
          />
        )}
      </div>
    );
  }

  // Compact list row for "Download More Forms"
  return (
    <div className="flex justify-between items-center border-b border-gray-200 py-4">
      <div>
        <h3 className="font-semibold text-base">{downloadForms.title}</h3>
        <p className="text-sm text-gray-600">{downloadForms.description}</p>
      </div>
      <a
        href={downloadForms.url}
        target="_blank"
        className="inline-flex items-center text-xs font-medium rounded-full border px-3 py-1 hover:bg-gray-100"
      >
        Download <Download className="ml-1 w-3 h-3" />
      </a>

    </div>
  );
};

export default DownloadFormsCards;
