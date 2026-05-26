import { getImageUrl } from '../../services/cloudinary';

interface CloudinaryImageProps {
  publicId: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  crop?: 'fill' | 'scale' | 'fit' | 'thumb';
  quality?: number | 'auto';
  format?: 'jpg' | 'png' | 'webp' | 'auto';
}

export function CloudinaryImage({ 
  publicId, 
  alt = '', 
  width, 
  height,
  className = '',
  crop = 'fill',
  quality = 'auto',
  format = 'auto'
}: CloudinaryImageProps) {
  if (!publicId) return null;

  return (
    <img
      src={getImageUrl(publicId, { width, height, crop, quality, format })}
      alt={alt}
      className={className}
    />
  );
}

interface GalleryImageProps {
  src: string;
  publicId?: string;
  alt: string;
  onClick?: () => void;
}

export function GalleryImage({ src, publicId, alt, onClick }: GalleryImageProps) {
  return (
    <div 
      className="group cursor-pointer overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all"
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}