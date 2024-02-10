import Image from "next/image";
import { Suspense, forwardRef } from "react";

export const Video = forwardRef<HTMLVideoElement, { autoplay?: boolean }>(function Video({ autoplay }, ref) {
  return (
    <Suspense fallback={<Image src="public/bg.webp" alt="" />}>
      <video
        ref={ref}
        src={"https://lgi9lbumnuuvhqe8.public.blob.vercel-storage.com/cover-01-MbqTMTL4U6fsRiWGqzOE5DdZXuKLlA.mp4"}
        autoPlay={autoplay}
        loop
        muted
        playsInline
        className="h-full w-full object-cover object-center"
      />
    </Suspense>
  );
});
