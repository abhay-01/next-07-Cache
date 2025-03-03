"use server";

import { revalidateTag } from "next/cache";

//this function will invalidate the cache for the images tag if it is present in the cache.
export async function revalidateImages(){
    revalidateTag('images');
    return{
        message:"Cache invalidated for images"
    }
}

