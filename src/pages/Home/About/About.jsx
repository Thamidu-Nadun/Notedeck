import {Fragment} from 'react';

export default function Example () {
  return (
    <div className="bg-white my-4 py-12 w-screen">
      <h1 className="text-3xl font-semibold text-center mx-auto">
        About our apps
      </h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
        A visual collection of our most recent works - each piece crafted with intention, emotion and style.
      </p>
      <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 md:px-0 pt-20">
        <div className="size-[520px] -top-80 left-1/2 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1]" />
        <div className="py-10 border-b md:py-0 md:border-r md:border-b-0 md:px-10">
          <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png"
              alt=""
            />
          </div>
          <div className="mt-5 space-y-2">
            <h3 className="text-base font-medium text-slate-600">
              Lightning-Fast Performance
            </h3>
            <p className="text-sm text-slate-500">
              Built with speed — minimal load times and optimized.
            </p>
          </div>
        </div>
        <div className="py-10 border-b md:py-0 lg:border-r md:border-b-0 md:px-10">
          <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png"
              alt=""
            />
          </div>
          <div className="mt-5 space-y-2">
            <h3 className="text-base font-medium text-slate-600">
              Beautifully Designed Components
            </h3>
            <p className="text-sm text-slate-500">
              Modern, pixel-perfect UI components ready for any project.
            </p>
          </div>
        </div>
        <div className="py-10 border-b md:py-0 md:border-b-0 md:px-10">
          <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png"
              alt=""
            />
          </div>
          <div className="mt-5 space-y-2">
            <h3 className="text-base font-medium text-slate-600">
              Plug-and-Play Integration
            </h3>
            <p className="text-sm text-slate-500">
              Simple setup with support for React, Next.js and Tailwind css.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
