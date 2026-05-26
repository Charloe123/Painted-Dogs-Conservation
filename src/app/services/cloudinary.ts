const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'dpahyb1x9';
const API_KEY = import.meta.env.VITE_CLOUDINARY_API_KEY;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

export const getCloudName = () => CLOUD_NAME;

export const getUploadPreset = () => UPLOAD_PRESET;

export const getImageUrl = (publicId: string, options?: {
  width?: number;
  height?: number;
  crop?: 'fill' | 'scale' | 'fit' | 'thumb';
  quality?: number | 'auto';
  format?: 'jpg' | 'png' | 'webp' | 'auto';
}) => {
  if (!publicId) return '';
  
  const params = new URLSearchParams();
  if (options?.width) params.set('w', String(options.width));
  if (options?.height) params.set('h', String(options.height));
  if (options?.crop) params.set('c', options.crop);
  if (options?.quality) params.set('q', String(options.quality));
  if (options?.format) params.set('f', options.format);
  if (options?.quality === 'auto') params.set('q', 'auto');
  if (options?.format === 'auto') params.set('f', 'auto');
  
  const paramString = params.toString();
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload${paramString ? '/' + paramString : ''}/${publicId}`;
};

export const uploadImage = async (file: File): Promise<string> => {
  if (!UPLOAD_PRESET) {
    throw new Error('Cloudinary upload preset not configured');
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', UPLOAD_PRESET);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`,
    {
      method: 'POST',
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error('Upload failed');
  }

  const data = await response.json();
  return data.secure_url;
};

export const uploadImageWithPublicId = async (file: File, folder?: string): Promise<{
  url: string;
  publicId: string;
}> => {
  if (!UPLOAD_PRESET) {
    throw new Error('Cloudinary upload preset not configured');
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', UPLOAD_PRESET);
  if (folder) formData.append('folder', folder);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`,
    {
      method: 'POST',
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error('Upload failed');
  }

  const data = await response.json();
  return {
    url: data.secure_url,
    publicId: data.public_id,
  };
};