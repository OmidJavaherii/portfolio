interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

export default function imageLoader({ src, width, quality }: ImageLoaderProps): string {
  // If the image is already a Cloudinary URL, return it as is
  if (src.includes('cloudinary.com')) {
    return src;
  }

  // For local images, upload them to Cloudinary first
  // You'll need to implement the upload logic separately
  // For now, we'll use a placeholder
  const cloudName: string = 'your-cloud-name'; // Replace with your Cloudinary cloud name
  const transformations: string[] = [
    'f_auto', // Automatic format selection
    'q_auto', // Automatic quality
    `w_${width}`, // Width
    'c_scale', // Scale
  ];

  // Add quality if specified
  if (quality) {
    transformations.push(`q_${quality}`);
  }

  const transformationString: string = transformations.join(',');

  // For development, use the original image
  if (process.env.NODE_ENV === 'development') {
    return src;
  }

  // For production, use Cloudinary
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformationString}/${src}`;
} 