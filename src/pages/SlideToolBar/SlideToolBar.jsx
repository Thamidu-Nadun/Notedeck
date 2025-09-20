import {useEffect} from 'react';
import {Crown, Download, Eye, CloudUpload} from 'lucide-react';
import MainLayout from '../../layout/MainLayout';
import {useLocation, useNavigate} from 'react-router-dom';
import {useLocalMarkdown} from '../../hooks/useLocalMarkdown.js';

const defaultMarkdownContent = `
# Sample Presentation
---
This is a sample presentation generated from markdown.
---
## Slide 1
- Point 1
- Point 2
---
## Slide 2
- Another Point
- Yet Another Point
`;

/**
 * SlideToolBar Component
 * @param {Object} Location State: {markdown} - React Router location object
 * @returns {JSX.Element}
 * */
const SlideToolBar = () => {
  const location = useLocation ();
  const navigate = useNavigate ();
  const localMarkdown = useLocalMarkdown ();

  const markdown =
    location.state.markdown ||
    localMarkdown.loadMarkdown () ||
    defaultMarkdownContent;
  const handleActions = {
    handlePreview: () => {
      navigate ('/slides', {state: {markdown}});
    },
    handleExport: () => {
      // navigate ('/slides?print-pdf', {state: {markdown}});
      window.open (`/slides?print-pdf`, '_blank');
    },
    handleSaveToCloud: () => {},
  };
  useEffect (() => {
    console.log (location.state.markdown);
  }, []);

  return (
    <MainLayout>
      <div
        className="h-screen min-h-screen overflow-x-hidden bg-opacity-50 w-screen p-6 flex justify-center items-center bg-repeat"
        style={{
          backgroundImage: "url('/assets/square.svg')",
          backgroundSize: '30px',
        }}
      >
        <div className="action-steps text-white w-4xl p-6 rounded-xl bg-gray-800/70 backdrop-blur-lg">
          <div className="header text-center mb-8">
            <h2 className="text-3xl font-bold">
              Your Presentation is Ready!
            </h2>
            <p className="text-md text-gray-100/60">
              Follow these steps to finalize your project.
            </p>
          </div>
          <div className="action-step-item flex items-center justify-between bg-gray-950/40 p-4 rounded-lg mb-4">
            <div className="step-item flex items-center gap-2">
              <div className="item-number size-10 font-bold flex items-center justify-center bg-violet-500 rounded-full">
                1
              </div>
              <div className="item-info ml-4">
                <div className="item-name font-bold text-lg">Preview</div>
                <p className="item-desc text-sm text-gray-100/60">
                  See how your presentation looks.
                </p>
              </div>
            </div>
            <div
              onClick={handleActions.handlePreview}
              className="step-button px-4 py-2 text-white bg-violet-500 rounded-4xl flex items-center gap-2 cursor-pointer hover:bg-violet-600 transition"
            >
              <Eye className="w-5 h-5" />
              <span>Preview</span>
            </div>
          </div>
          <div className="action-step-item flex items-center justify-between bg-gray-950/40 p-4 rounded-lg mb-4">
            <div className="step-item flex items-center gap-2">
              <div className="item-number size-10 font-bold flex items-center justify-center bg-gray-500 rounded-full">
                2
              </div>
              <div className="item-info ml-4">
                <div className="item-name font-bold text-lg">Export</div>
                <p className="item-desc text-sm text-gray-100/60">
                  Download as PPTX or PDF.
                </p>
              </div>
            </div>
            <div
              onClick={handleActions.handleExport}
              className="step-button px-4 py-2 text-white bg-gray-500 rounded-4xl flex items-center gap-2 cursor-pointer hover:bg-gray-600 transition"
            >
              <Download className="w-5 h-5" />
              <span>Export</span>
            </div>
          </div>
          <div className="action-step-item flex items-center justify-between bg-gray-950/40 p-4 rounded-lg mb-4">
            <div className="step-item flex items-center gap-2">
              <div className="item-number size-10 font-bold flex items-center justify-center bg-amber-500/30 text-amber-500/96 border border-amber-500 rounded-full">
                3
              </div>
              <div className="item-info ml-4 text-amber-500/96">
                <div className="item-name font-bold text-lg flex items-center gap-0.5 relative">
                  Save to cloud
                  {' '}
                  <span>
                    <span className="absolute -top-1 px-2 py-0.5 text-xs rounded-2xl bg-amber-500/50 border border-amber-500/96 text-amber-500/96 text-center font-bold">
                      Premium
                    </span>
                  </span>
                </div>
                <p className="item-desc text-sm text-gray-100/60">
                  Save and access from anywhere.
                </p>
              </div>
            </div>
            <div
              onClick={handleActions.handleSaveToCloud}
              className="step-button px-4 py-2 bg-amber-400/20 font-bold border border-amber-500/96 text-amber-500 rounded-4xl flex items-center gap-2 cursor-pointer shine transition"
            >
              <CloudUpload className="w-5 h-5 text-amber-500" />
              <span>Save</span>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SlideToolBar;
