import React from 'react';
import { cn } from '@/lib/utils';

interface ZennitCardProps {
  image: string;
  title: string;
  subtitle: string;
  price?: string;
  rating?: number;
  reviews?: number;
  className?: string;
  onImageError?: () => void;
}

// SVG Icon Components
const MapPin = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const Star = ({ size = 24, className = "", filled = false }: { size?: number; className?: string; filled?: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

export const ZennitCard = ({
  image,
  title,
  subtitle,
  price,
  rating,
  reviews,
  className,
  onImageError,
}: ZennitCardProps) => {
  return (
    <div
      className={cn(
        "relative group rounded-3xl overflow-hidden transition-all duration-700 hover:-translate-y-3 backdrop-blur-sm",
        className
      )}
    >
      {/* Animated Border Gradient */}
      <div className="absolute -inset-[2px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-700"></div>
      
      {/* Main Card Container */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-[0_25px_100px_-15px] group-hover:shadow-violet-500/40 transition-all duration-700 border-2 border-gray-200 dark:border-gray-800 group-hover:border-transparent bg-white dark:bg-gray-900">
        
        {/* Image Container with Enhanced Gradient Overlays */}
        <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-[1.15] group-hover:rotate-3 brightness-95 group-hover:brightness-110"
            onError={(e) => {
              if (onImageError) {
                onImageError();
              } else {
                (e.target as HTMLImageElement).src =
                  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM4YjVjZjY7c3RvcC1vcGFjaXR5OjAuMiIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNlYzQ4OTk7c3RvcC1vcGFjaXR5OjAuMiIgLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmaWxsPSIjOGI1Y2Y2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZm9udC13ZWlnaHQ9ImJvbGQiPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
              }
            }}
          />
          
          {/* Multi-layer Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-700" />
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 via-fuchsia-500/20 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          {/* Premium Price Badge with Glow */}
          {price && (
            <div className="absolute top-5 right-5 group-hover:scale-110 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 rounded-2xl blur-xl opacity-70"></div>
              <div className="relative bg-gradient-to-r from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 backdrop-blur-2xl px-5 py-2.5 rounded-2xl shadow-2xl border-2 border-white/60 dark:border-gray-700/60 text-sm font-black tracking-wide">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 dark:from-violet-400 dark:via-fuchsia-400 dark:to-pink-400">
                  {price}
                </span>
              </div>
            </div>
          )}

          {/* Animated Shimmer Effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1200 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          {/* Bottom Content Overlay - Enhanced */}
          <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-700">
            <h3 className="text-white text-2xl font-black mb-2 line-clamp-1 drop-shadow-2xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-violet-200 group-hover:to-fuchsia-200 transition-all duration-500">
              {title}
            </h3>
            <p className="text-white/95 text-sm flex items-center mb-4 line-clamp-1 drop-shadow-lg font-medium">
              <MapPin size={18} className="mr-2 flex-shrink-0 text-violet-400 drop-shadow-[0_0_12px_rgba(167,139,250,0.9)] group-hover:scale-125 group-hover:text-fuchsia-400 transition-all duration-500" />
              <span className="group-hover:text-violet-200 transition-colors duration-500">{subtitle}</span>
            </p>

            {rating !== undefined && reviews !== undefined && (
              <div className="relative">
                {/* Glow effect behind rating */}
                <div className="absolute -inset-3 bg-gradient-to-r from-violet-500/30 via-fuchsia-500/30 to-pink-500/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative flex items-center justify-between bg-gradient-to-r from-white/15 via-white/20 to-white/15 backdrop-blur-2xl rounded-2xl px-5 py-3.5 border-2 border-white/30 shadow-2xl group-hover:border-violet-400/50 group-hover:shadow-violet-500/30 transition-all duration-700">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-2.5">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={19}
                          filled={i < Math.floor(rating)}
                          className={cn(
                            "transition-all duration-700 group-hover:scale-110",
                            i < Math.floor(rating) 
                              ? "text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,1)] group-hover:text-amber-300 group-hover:drop-shadow-[0_0_20px_rgba(251,191,36,1)]" 
                              : "text-gray-500/40 dark:text-gray-600/40"
                          )}
                        />
                      ))}
                    </div>
                    <span className="text-base font-black text-white drop-shadow-lg group-hover:text-amber-300 transition-colors duration-500">
                      {rating.toFixed(1)}
                    </span>
                  </div>
                  <span className="text-xs text-white/95 font-bold bg-white/15 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/20">
                    {reviews.toLocaleString()}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Hover Accent Border */}
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-violet-500/60 transition-all duration-700 pointer-events-none shadow-inner"></div>
      </div>
    </div>
  );
};

export default ZennitCard;
