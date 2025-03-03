// Example of fetching images with different cache strategies


//1. Fetch images with cache
export async function fetchImagesWithCache() {
    const response = await fetch('https://dummyjson.com/products', {
      next: { 
        tags: ['images'],
        revalidate: 3600 // Cache for 1 hour
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch images');
    }


    // const data = await response.json();
    // console.log(">>",data);
    
    return response.json();
  }
  

  //2. Fetch images with no store
  export async function fetchImagesNoStore() {
    const response = await fetch('https://dummyjson.com/products', {
      cache: 'no-store' // Equivalent to next: { revalidate: 0 }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch images');
    }
    
    return response.json();
  }
  

    //3. Fetch images with force cache
  export async function fetchImagesForceCache() {
    const response = await fetch('https://dummyjson.com/products', {
      cache: 'force-cache' // Default behavior, equivalent to next: { revalidate: false }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch images');
    }
    
    return response.json();
  }