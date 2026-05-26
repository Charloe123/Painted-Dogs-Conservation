import { useState, useRef } from 'react';
import { uploadImage, uploadImageWithPublicId, getImageUrl } from '../../services/cloudinary';

interface ImageUploaderProps {
  onUpload: (url: string, publicId?: string) => void;
  folder?: string;
  buttonText?: string;
  className?: string;
}

export function ImageUploader({ onUpload, folder, buttonText = 'Upload Image', className = '' }: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    setUploading(true);
    try {
      let result;
      if (folder) {
        result = await uploadImageWithPublicId(file, folder);
        onUpload(result.url, result.publicId);
      } else {
        const url = await uploadImage(file);
        onUpload(url);
      }
      
      setPreview(URL.createObjectURL(file));
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  return (
    <div className={className}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        disabled={uploading}
        className="px-4 py-2 bg-[#d97836] text-white rounded-lg font-semibold hover:bg-[#c46a2f] transition-all disabled:opacity-50 flex items-center gap-2"
      >
        {uploading ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Uploading...
          </>
        ) : (
          buttonText
        )}
      </button>
      {preview && (
        <div className="mt-3">
          <img src={preview} alt="Preview" className="max-h-48 rounded-lg object-cover" />
        </div>
      )}
    </div>
  );
}