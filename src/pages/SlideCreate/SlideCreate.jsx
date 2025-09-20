import {Save, SquareStack} from 'lucide-react';
import Button from '../../Components/Button/Button';
import MainLayout from '../../layout/MainLayout';
import {useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './SlideCreate.css';
import {useLocalMarkdown} from '../../hooks/useLocalMarkdown';
import {from_github} from '../../utils/remoteMD.js';
import {error, success} from '../../Components/Toast/toastUtils';
const SlideCreate = () => {
  const [markdown, setMarkdown] = useState ('');
  const navigate = useNavigate ();
  const urlRef = useRef ();
  const localMarkdown = useLocalMarkdown ();

  let placeholder = `## Slide 1 Title
---
- Bullet point 1
- Bullet point 2
## Slide 2 Title
![alt text](image.jpg)`;
  useEffect (() => {
    localMarkdown.loadMarkdown () &&
      setMarkdown (localMarkdown.loadMarkdown ());
    document.title = 'Create Presentation - PresenationMD';
  }, []);

  /**
   * Import markdown file from GitHub URL
   */
  const import_markdown_from_github = async () => {
    let url = urlRef.current.value;
    console.log (url);
    from_github (urlRef.current.value).then (data => {
      if (data) {
        setMarkdown (data);
        success (
          'Successfully imported markdown from GitHub!',
          'You can now edit and convert it to slides.',
          3000,
          'br'
        );
      } else {
        error (
          'Failed to fetch markdown from the provided URL.',
          'Please check the URL and try again.',
          3000,
          'br'
        );
      }
    });
  };

  /**
   * Save markdown to localStorage and navigate to slides view
   */
  const submitMarkdown = () => {
    localMarkdown.saveMarkdown (markdown);
    navigate ('/slides/actions', {state: {markdown}});
    console.log (markdown);
  };
  return (
    <MainLayout>
      <div className="h-screen w-screen bg-black flex justify-center items-center">
        <div className="div mx-auto my-10 bg-gray-900 rounded-4xl h-[80vh] w-[80vw] py-4 px-8 flex flex-col items-center">
          <div className="my-4 text-center">
            <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-white to-[#748298] text-transparent bg-clip-text font-semibold hero_title italic py-2">
              Create Your
              {' '}
              <span className="bg-gradient-to-r from-[#ff8c00] to-[#ffb347] bg-clip-text text-transparent">
                Presentation
              </span>
            </h2>
            <p className="mt-1 max-w-2xl mx-auto text-md md:text-lg text-gray-400">
              Simply paste your Markdown content below, and we'll transform it into a beautiful, ready-to-present slideshow.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-end gap-2 w-full my-4 md:my-2 md:m-4 px-1">
            <input
              type="url"
              name="github-url"
              placeholder="https://github.com/example/repo/main/slides.md"
              ref={urlRef}
              pattern="https://github\.com/.+/.+\.md"
              className="text-sm md:text-md text-indigo-300 border border-indigo-400/65 focus:border-indigo-500 outline-none rounded-lg pl-2 py-1 bg-gray-800 placeholder:text-gray-500 w-full md:w-1/2 caret-amber-400 valid:text-green-300 invalid:text-red-300 transition duration-300"
            />
            <button
              onClick={import_markdown_from_github}
              className="p-1 md:px-4 md:py-1 opacity-65 hover:opacity-100 border border-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition duration-300"
            >
              Import from GitHub
            </button>
          </div>
          <div className="bg-gray-600/80 w-full h-full p-2 rounded-b-xl rounded-tr-xl text_box">
            <textarea
              value={markdown}
              onChange={e => setMarkdown (e.target.value)}
              className="w-full h-full outline-none text-amber-50 font-mono text-lg sm:text-xl md:text-lg pl-3 pt-4 caret-amber-400 block bg-gray-900 border-gray-700 rounded-bottom-xl rounded-tr-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-500 resize-non"
              placeholder={placeholder}
            />
          </div>
          <div className="my-4 w-full flex justify-end gap-4">
            <button
              onClick={submitMarkdown}
              className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition duration-300"
            >
              <SquareStack size={20} className="inline mr-2" />
              Convert to Slides
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SlideCreate;
