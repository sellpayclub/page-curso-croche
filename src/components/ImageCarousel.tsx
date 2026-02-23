import { motion } from "motion/react";

const images = [
  "https://i.pinimg.com/236x/c6/30/a7/c630a7028397ebcbb49d5e7905b37fdf.jpg",
  "https://i.pinimg.com/236x/6d/a0/01/6da00139d12f7803101c2bc62121903a.jpg",
  "https://i.pinimg.com/236x/b6/87/2b/b6872bda70e12f2d473c4b458d67d2dc.jpg",
  "https://i.pinimg.com/236x/15/27/fa/1527fa06289d8c923f02252b45a9f35a.jpg",
  "https://i.pinimg.com/236x/9d/53/75/9d5375e30de824e191141f61ddd833fe.jpg",
  "https://i.pinimg.com/236x/e8/5d/1d/e85d1d1fc7b5595a49a9add573033930.jpg",
  "https://i.pinimg.com/videos/thumbnails/originals/00/73/a3/0073a3cf1a6164abef2b4988fec60577.0000000.jpg",
  "https://i.pinimg.com/236x/ae/f3/3c/aef33c47f9e352d43d30daae889593c2.jpg",
  "https://i.pinimg.com/236x/c1/23/92/c123920b4f59554348f98fd291bd1c77.jpg",
  "https://i.pinimg.com/videos/thumbnails/originals/ac/f1/23/acf1233ba1242aaffede894e361e5c20.0000000.jpg",
  "https://i.pinimg.com/videos/thumbnails/originals/8a/62/1e/8a621eaabee1b05ae976dab43e8218a7.0000000.jpg",
  "https://i.pinimg.com/236x/4f/31/47/4f31472793e192be6d1d46ae1d75e400.jpg",
  "https://i.pinimg.com/236x/a1/bc/bd/a1bcbd05bb203c488f64fbf09edb4db3.jpg",
  "https://i.pinimg.com/236x/de/ff/a5/deffa501a4425a7c2c945a7add10cd4b.jpg",
  "https://i.pinimg.com/236x/c4/c3/30/c4c3304ac366d401ee42a040fa506b64.jpg",
  "https://i.pinimg.com/236x/6a/f8/31/6af831a4b124d18d8fbad99109fd9579.jpg",
];

export function ImageCarousel() {
  // Duplicate images for seamless loop
  const carouselImages = [...images, ...images];

  return (
    <div className="w-full overflow-hidden py-12 bg-white">
      <div className="container mx-auto px-4 mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-2 font-serif">
          VEJA AS PEÇAS QUE NOSSAS ALUNAS FIZERAM
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
              duration: 60, // Slower duration for images
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {carouselImages.map((src, index) => (
            <div
              key={`${index}-${src}`}
              className="relative w-[200px] md:w-[240px] aspect-[3/4] rounded-xl overflow-hidden shadow-lg border-2 border-stone-100 flex-shrink-0 bg-stone-200"
            >
              <img
                src={src}
                alt={`Peça de aluna ${index}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
