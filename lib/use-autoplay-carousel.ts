import { useEffect } from "react";
import type { UseEmblaCarouselType } from "embla-carousel-react";

type CarouselApi = UseEmblaCarouselType[1];

export function useAutoplayCarousel(
  api: CarouselApi | undefined,
  delay = 3000
) {
  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, [api, delay]);
}
