'use client'

import { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the PopUp component
const PopUp = dynamic(() => import('./PopUp'), {
  loading: () => <p>Loading popup...</p>,
  ssr: false, // Disable Server-Side Rendering
});

export default function Button() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="my-4">
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowPopup(true)}
      >
        Open Popup
      </button>
      
      {showPopup && <PopUp onClose={() => setShowPopup(false)} />}
    </div>
  );
}