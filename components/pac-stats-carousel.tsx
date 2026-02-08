"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface PacStat {
  id: string;
  value: string;
  label: string;
}

const defaultStats: PacStat[] = [
  { id: "years", value: "80+", label: "Years of thoughtful conversation" },
  {
    id: "speakers",
    value: "250+",
    label: "Speakers including Pulitzer Prize winners and presidential advisors",
  },
  {
    id: "attendees",
    value: "5,000+",
    label: "Attendees from across the country",
  },
  {
    id: "student-led",
    value: "100%",
    label: "Student-Led from theme choice to execution",
  },
];

interface PacStatsCarouselProps {
  heading?: string;
  stats?: PacStat[];
  className?: string;
}

export function PacStatsCarousel({
  heading = "PAC by the numbers",
  stats = defaultStats,
  className,
}: PacStatsCarouselProps) {
  return (
    <section className={`py-12 md:py-16 ${className ?? ""}`}>
      <div className="flex flex-col items-center text-center mb-8">
        <h2 className="font-sans text-2xl md:text-3xl font-bold text-[#3D3D3D] text-pretty">
          {heading}
        </h2>
      </div>
      <div className="relative mx-auto flex items-center justify-center max-w-5xl px-4">
        <Carousel
          opts={{ loop: true }}
          plugins={[AutoScroll({ playOnInit: true })]}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {stats.map((stat) => (
              <CarouselItem
                key={stat.id}
                className="flex basis-full justify-center pl-0 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="mx-4 flex shrink-0 items-center justify-center">
                  <div className="text-center p-6 md:p-8 bg-[#F8F4EC] border border-[#E5DED3] rounded-xl shadow-sm min-w-[200px] w-full max-w-[260px]">
                    <p className="text-2xl md:text-3xl font-bold text-[#D9A87E] mb-2">
                      {stat.value}
                    </p>
                    <p className="text-sm text-[#5C5C5C] leading-snug">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
