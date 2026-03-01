import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/* Fallback when external URL fails - proven to work */
const FALLBACK_VIDEO = 'https://www.w3schools.com/html/mov_bbb.mp4';

/* Different video URLs per creator - fallback to FALLBACK_VIDEO on error */
const CREATORS = [
  {
    id: '1',
    name: 'Kayla Itsines',
    followers: '15.7M',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Bassem Youssef',
    followers: '7.2M',
    video: 'https://www.w3schools.com/html/movie.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Farhana Bodi',
    followers: '2.1M',
    video: 'https://www.sample-videos.com/video321/mp4/360/big_buck_bunny_360p_1mb.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Danae Mercer',
    followers: '4.8M',
    video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '5',
    name: 'DJ Bliss',
    followers: '3.5M',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '6',
    name: 'Sarah Chen',
    followers: '1.2M',
    video: 'https://butlerccwebdev.net/support/html5-video/media/bigbuckbunnytrailer-480p.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
  },
];

interface StudioCreatorsProps {
  onOpenBooking?: () => void;
}

export default function StudioCreators({ onOpenBooking }: StudioCreatorsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 240;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
    });
  };

  return (
    <section id="creators" className="bg-neutral-950 py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-12 md:mb-16">
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
            Featured
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-4xl text-white tracking-tight"
            >
              You've seen our studios everywhere
            </motion.h2>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll('left')}
                className="w-11 h-11 rounded-full border border-neutral-700 flex items-center justify-center text-white hover:border-neutral-500 hover:bg-neutral-800/50 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => scroll('right')}
                className="w-11 h-11 rounded-full border border-neutral-700 flex items-center justify-center text-white hover:border-neutral-500 hover:bg-neutral-800/50 transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-5 overflow-x-auto no-scrollbar pb-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {CREATORS.map((creator, index) => (
            <div key={creator.id} className="flex-shrink-0">
              <VideoCard creator={creator} index={index} />
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 md:mt-24 mb-8 md:mb-12 rounded-2xl overflow-hidden border border-neutral-800 relative"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop")',
            }}
          />
          <div className="absolute inset-0 bg-neutral-950/70" />
          <div className="relative z-10 py-16 md:py-20 px-8 md:px-16 flex flex-col items-center justify-center text-center">
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-gold-shiny mb-6">
              Ready to get started?
            </h3>
              <a
                href="#book"
                className="inline-flex items-center justify-center rounded-full bg-white text-black px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-neutral-800 transition-colors touch-manipulation"
              >
                Check availability
              </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

function VideoCard({
  creator,
  index,
}: {
  creator: (typeof CREATORS)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [videoSrc, setVideoSrc] = useState(creator.video);

  const handleVideoError = () => {
    if (videoSrc !== FALLBACK_VIDEO) setVideoSrc(FALLBACK_VIDEO);
  };

  useEffect(() => {
    setVideoSrc(creator.video);
  }, [creator.video]);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { rootMargin: '50px', threshold: 0.1 }
    );
    obs.observe(card);
    return () => obs.disconnect();
  }, []);

  const tryPlay = () => {
    videoRef.current?.play().catch(() => {});
  };

  useEffect(() => {
    if (!isInView || !videoRef.current) return;
    const v = videoRef.current;
    if (v.readyState >= 2) tryPlay();
    else v.addEventListener('canplay', tryPlay);
    return () => v.removeEventListener('canplay', tryPlay);
  }, [isInView]);

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="flex-shrink-0 w-[200px] md:w-[240px] group"
      style={{ scrollSnapAlign: 'start' }}
    >
      <div className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900">
        <div className="aspect-[9/16] overflow-hidden relative">
          <video
            ref={videoRef}
            src={isInView ? videoSrc : undefined}
            poster={creator.thumbnail}
            muted
            loop
            playsInline
            autoPlay
            onError={handleVideoError}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-4 flex items-center gap-3 border-t border-neutral-800">
          <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
            <img
              src={creator.thumbnail}
              alt={creator.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-serif font-medium text-white text-sm truncate">
              {creator.name}
            </h3>
            <p className="text-neutral-500 text-xs mt-0.5">
              {creator.followers} followers
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

