/*
 * HomePage
 *
 */

import React from 'react';





export const HomePageCE = () => {

  return (
     
          <div className="p-4 flex flex-wrap items-center justify-center">
            <div className="flex-shrink-0 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
              <svg className="absolute bottom-0 left-0 mb-2" viewBox="0 0 375 283" fill="none" style={{ transform: 'scale(1.5)', opacity: '0.1' }}>
                <rect x="159.52" y={175} width={152} height={152} rx={8} transform="rotate(-45 159.52 175)" fill="white" />
                <rect y="107.48" width={152} height={152} rx={8} transform="rotate(-45 0 107.48)" fill="white" />
              </svg>
              <div className="relative  flex items-center justify-center">
                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2' }} />
                <img className="relative w-24 mt-2" src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" alt="" />
              </div>
              <div className="relative text-white px-6 pb-6 mt-">
                <span className="block opacity-75 -mb-1">Indoor</span>
                <div className="flex justify-between">
                  <span className="block font-semibold text-xl">Peace Lily</span>
                </div>
              </div>
            </div>
          </div>
  );
};

function HomePageSwitch() {
  const HomePage = HomePageCE

  // block rendering until the EE component is fully loaded
  if (!HomePage) {
    return null;
  }

  return <HomePage />;
}

export default HomePageSwitch;
