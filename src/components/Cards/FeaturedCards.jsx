import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Cards component
 * props:
 *  - title, description, image, icon (Icon), bgColor, className, large (bool)
 */
export default function FeaturedCards({
  title,
  description,
  image,
  icon: Icon,
  bgColor,
  className,
  large = false,
}) {
  // detect dark card to invert text/button styles
  const isDark = (bgColor || "").includes("text-white") || (bgColor || "").includes("bg-gray-900");

  return (
    <Card
      className={cn(
        "rounded-2xl overflow-hidden shadow-md flex flex-col",
        className,
        // keep passed bgColor on root so dark bg applies
        bgColor
      )}
    >
      <CardContent className="flex flex-col h-full p-6">
        {/* Image wrapper: larger for `large` card */}
        <div
          className={cn(
            "mb-4 w-full overflow-hidden rounded-lg flex items-center justify-center relative",
            large ? "h-72 sm:h-96 md:h-[28rem]" : "h-40 sm:h-56 md:h-64"
          )}
        >
          <img
            src={image}
            alt={title}
            className={cn(
              "w-full h-full object-cover transition-transform duration-300",
              // object position: left for large "hero" card, center for regular cards
              large ? "object-left" : "object-center"
            )}
          />

          {/* Optional subtle overlay to mute image tones for readability */}
          <div
            className={cn(
              "absolute inset-0 pointer-events-none",
              isDark ? "bg-black/20" : "bg-white/0"
            )}
          />
        </div>

        {/* Title */}
        <h3
          className={cn(
            "text-xl sm:text-2xl font-extrabold mb-2",
            isDark ? "text-white" : "text-gray-900"
          )}
        >
          {title}
        </h3>

        {/* Description: clamp visually and allow button pinned to bottom */}
        <p
          className={cn(
            "text-sm leading-relaxed mb-4",
            isDark ? "text-gray-200 opacity-95" : "text-gray-700 opacity-95",
            // limit vertical space to mimic screenshot truncation
            "max-h-32 overflow-hidden"
          )}
        >
          {description}
        </p>

        {/* Button pinned to bottom of card content */}
        <div className="mt-auto">
          <Button
            variant="outline"
            className={cn(
              "flex items-center gap-2 rounded-full px-4 py-2 text-sm",
              isDark
                ? "border-white text-white hover:bg-white hover:text-gray-900"
                : "border-gray-700 text-gray-700 hover:bg-gray-200"
            )}
          >
            <span>Book Session</span>
            {Icon ? <Icon className="w-4 h-4" /> : null}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}