import {Save, SquareStack} from 'lucide-react';
import Button from '../../Components/Button/Button';
import MainLayout from '../../layout/MainLayout';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './SlideCreate.css';

const SlideCreate = () => {
  const [markdown, setMarkdown] = useState ('');
  const navigate = useNavigate ();

  let placeholder = `## Slide 1 Title
---
- Bullet point 1
- Bullet point 2
## Slide 2 Title
![alt text](image.jpg)`;
  const submitMarkdown = () => {
    navigate ('/slides', {state: {markdown}});
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
            <p class="mt-1 max-w-2xl mx-auto text-md md:text-lg text-gray-400">
              Simply paste your Markdown content below, and we'll transform it into a beautiful, ready-to-present slideshow.
            </p>
          </div>
          <div className="bg-gray-600/80 w-full h-full p-2 rounded-b-xl rounded-tr-xl text_box">
            <textarea
              value={markdown}
              onChange={e => setMarkdown (e.target.value)}
              className="w-full h-full outline-none text-amber-50 font-mono text-2xl sm:text-xl md:text-lg pl-3 pt-4 caret-amber-400 block bg-gray-900 border-gray-700 rounded-bottom-xl rounded-tr-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-500 resize-non"
              placeholder={placeholder}
            />
          </div>
          <div className="my-4 w-full flex justify-end gap-4">
            {/* <Button
              btn_title="Convert to Slides"
              icon={<Save size={24} />}
              onClick={submitMarkdown}
            /> */}
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
