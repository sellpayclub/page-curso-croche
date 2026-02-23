import { motion } from "motion/react";

const videos = [
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/1vestido.mp4",
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/2vestido.mp4",
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/3vestido.mp4",
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/4vestido.mp4",
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/5vestido.mp4",
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/6vestido.mp4",
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/7vestido.mp4",
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/9vestido.mp4",
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/10vestido.mp4",
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/11vestido.mp4",
];

export function VideoCarousel() {
  // We duplicate the videos to create a seamless loop effect
  const carouselVideos = [...videos, ...videos];

  return (
    <div className="w-full overflow-hidden py-12 bg-stone-100">
      <div className="container mx-auto px-4 mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-2 font-serif">
          VEJA OS VESTIDOS QUE NOSSAS ALUNAS FIZERAM
        </h2>
        <div className="w-24 h-1 bg-rose-500 mx-auto rounded-full"></div>
      </div>
      
      <div className="relative w-full flex overflow-hidden">
        <motion.div
          className="flex gap-4"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40, // Adjust speed here
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {carouselVideos.map((src, index) => (
            <div
              key={`${index}-${src}`}
              className="relative w-[200px] md:w-[280px] aspect-[9/16] rounded-xl overflow-hidden shadow-lg border-2 border-white flex-shrink-0 bg-stone-200"
            >
              <video
                src={src}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
