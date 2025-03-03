import Image from 'next/image';
import Button from './components/Button';
import { roboto_mono } from './fonts/fonts';
import { fetchImagesWithCache, fetchImagesNoStore, fetchImagesForceCache } from './lib/fetchImages';
import { revalidateImages } from './actions/revalidate';


interface Image {
  id: number;
  title: string;
  thumbnail: string;
  brand: string;
}
export default async function Home() {
  const cachedImages = await fetchImagesWithCache();
  const noCacheImages = await fetchImagesNoStore();
  const forceCachedImages = await fetchImagesForceCache();
  
  

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold mb-6">Next.js Features Demo</h1>
        
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Dynamic Import Demo</h2>
          <Button />
        </div>
        
        <form action={revalidateImages}>
          <button 
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Revalidate Image Cache
          </button>
        </form>
      </div>
      
      
      <div>
        <h2 className={`text-2xl font-semibold mb-4 ${roboto_mono.className}`}>
          Images with Cache: force-cache (Default)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {forceCachedImages.products.slice(0,3).map((image:Image) => (
            <div key={image.id} className="border rounded-lg overflow-hidden">
              <Image
                src={image.thumbnail}
                alt={image.brand}
                width={600}
                height={600}
                className="w-full h-auto"
              />
              <div className="p-4">
                <h3 className="font-medium truncate">{image.title}</h3>
              </div>
            </div>
          ))}

        </div>
      </div>
      
      <div>
        <h2 className={`text-2xl font-semibold mb-4 ${roboto_mono.className}`}>
          Images with Tagged Cache (revalidate: 3600)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cachedImages.products.slice(0,3).map((image:Image) => (
            <div key={image.id} className="border rounded-lg overflow-hidden">
              <Image
                src={image.thumbnail}
                alt={image.title}
                width={600}
                height={600}
                className="w-full h-auto"
              />
              <div className="p-4">
                <h3 className="font-medium truncate">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className={`text-2xl font-semibold mb-4 ${roboto_mono.className}`}>
          Images with Cache: no-store
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {noCacheImages.products.slice(0,3).map((image:Image) => (
            <div key={image.id} className="border rounded-lg overflow-hidden">
              <Image
                src={image.thumbnail}
                alt={image.title}
                width={600}
                height={600}
                className="w-full h-auto"
              />
              <div className="p-4">
                <h3 className="font-medium truncate">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}