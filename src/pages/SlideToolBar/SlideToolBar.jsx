import {useState} from 'react';
import {Crown, Download, Eye, SaveAll, Check} from 'lucide-react';
import MainLayout from '../../layout/MainLayout';

const SlideToolBar = () => {
  const [slide_details, setSlide_details] = useState ({
    title: 'Slide Title',
    description: 'This is a brief description of the slide.',
    date: '2025-01-01',
    author: 'Author Name',
  });
  const [showSaveSuccess, setShowSaveSuccess] = useState (false);
  const handleSaveChanges = () => {
    setShowSaveSuccess (true);
    console.log ('Changes saved:', slide_details);
    setTimeout (() => setShowSaveSuccess (false), 2000);
  };

  return (
    <MainLayout>
      <div className="slide-tool-bar min-h-screen w-screen flex flex-col md:flex-row items-center justify-around gap-8 px-4 md:px-10 py-8">
        <div className="actions flex md:flex-col gap-6">
          <div className="preview-btn group relative w-md flex gap-2 items-center justify-start px-3">
            <span className="text-amber-300 border-2 border-amber-300 rounded-full size-12 flex items-center justify-center font-bold transform group-hover:scale-110 transition-transform">
              1
            </span>
            <button className="ml-16 flex gap-2 items-center justify-center px-4 py-2.5 border-2 border-amber-300 text-amber-300 rounded-lg hover:bg-amber-300 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50">
              <span className="relative">
                Preview
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
              </span>
              <Eye
                size={18}
                className="transform group-hover:rotate-12 transition-transform"
              />
            </button>
          </div>
          <div className="export-btn group relative w-md flex gap-2 items-center justify-start px-3">
            <span className="text-amber-300 border-2 border-amber-300 rounded-full size-12 flex items-center justify-center font-bold transform group-hover:scale-110 transition-transform">
              2
            </span>
            <button className="ml-16 flex gap-2 items-center justify-center px-4 py-2.5 border-2 border-amber-300 text-amber-300 rounded-lg hover:bg-amber-300 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50">
              <span className="relative">
                Export
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
              </span>
              <Download
                size={18}
                className="transform group-hover:translate-y-1 transition-transform"
              />
            </button>
          </div>
          <div className="save-btn group relative w-md flex gap-2 items-center justify-start px-3">
            <span className="text-amber-300 border-2 border-amber-300 rounded-full size-12 flex items-center justify-center font-bold transform group-hover:scale-110 transition-transform">
              3
            </span>
            <button className="shine ml-16 flex gap-2 relative items-center justify-center px-6 py-2.5 bg-gradient-to-r from-amber-400 to-amber-300 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-300/20">
              <Crown
                size={18}
                className="transform group-hover:rotate-12 transition-transform"
              />
              <span className="font-semibold">Save</span>
              {showSaveSuccess &&
                <Check
                  size={18}
                  className="absolute right-2 text-green-600 animate-bounce"
                />}
            </button>
          </div>
        </div>
        <div className="slide-details relative">
          <div className="detail-box border-2 border-amber-100/20 bg-black/40 backdrop-blur-lg p-10 rounded-xl w-96 max-w-lg shadow-xl hover:shadow-amber-300/10 transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute -top-3 -left-3 bg-amber-300 text-black px-3 py-1 rounded-lg text-sm font-semibold shadow-lg">
              Slide Details
            </div>
            <h2
              className="text-3xl font-bold mb-4 text-amber-50 focus:outline-none focus:text-amber-100 focus:caret-amber-300 pb-2 transition-all duration-300 hover:text-amber-200"
              value={slide_details.title}
              suppressContentEditableWarning
              onBlur={e =>
                setSlide_details ({
                  ...slide_details,
                  title: e.currentTarget.textContent,
                })}
              contentEditable
            >
              {slide_details.title}
            </h2>
            <div className="group relative">
              <p
                className="text-gray-400 focus:outline-none focus:text-amber-100 focus:caret-amber-300 pb-2 transition-all duration-300 hover:text-gray-300"
                suppressContentEditableWarning
                onBlur={e =>
                  setSlide_details ({
                    ...slide_details,
                    description: e.currentTarget.textContent,
                  })}
                contentEditable
              >
                {slide_details.description}
              </p>
              <span className="absolute -left-6 top-0 text-amber-300/50 opacity-0 group-hover:opacity-100 transition-opacity">
                ✎
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-amber-200/80 text-sm">Due Date:</label>
                <input
                  type="date"
                  name="date"
                  value={slide_details.date}
                  onChange={e =>
                    setSlide_details ({
                      ...slide_details,
                      date: e.target.value,
                    })}
                  className="outline-none text-amber-100 caret-amber-300 px-3 py-1.5 rounded-lg bg-black/30 border border-amber-200/20 focus:border-amber-300/50 transition-all duration-300"
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="text-amber-200/80 text-sm">Author:</label>
                <span
                  suppressContentEditableWarning
                  onBlur={e => {
                    setSlide_details ({
                      ...slide_details,
                      author: e.currentTarget.textContent,
                    });
                  }}
                  contentEditable
                  className="text-gray-300 focus:outline-none focus:text-amber-100 focus:caret-amber-300 pb-2 transition-all duration-300 hover:text-amber-200"
                >
                  {slide_details.author}
                </span>
              </div>
            </div>

            <button
              onClick={handleSaveChanges}
              className="w-full mt-8 flex gap-3 items-center justify-center px-4 py-3 border-2 border-amber-300 text-amber-300 rounded-lg hover:bg-amber-300 hover:text-black transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50 group"
            >
              <SaveAll
                size={18}
                className="transform group-hover:rotate-12 transition-transform"
              />
              <span className="font-medium">Save All Changes</span>
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SlideToolBar;
