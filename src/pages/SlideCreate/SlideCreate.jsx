import {Save} from 'lucide-react';
import Button from '../../Components/Button/Button';
import MainLayout from '../../layout/MainLayout';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
const SlideCreate = () => {
  const [markdown, setMarkdown] = useState ('');
  const navigate = useNavigate ();

  const submitMarkdown = () => {
    navigate ('/slides', {state: {markdown}});
    console.log (markdown);
  };
  return (
    <MainLayout>
      <div className="h-screen w-screen bg-black flex justify-center items-center">
        <div className="div mx-auto my-10 bg-gray-900 h-[80vh] w-[80vw] p-4">
          <textarea
            value={markdown}
            onChange={e => setMarkdown (e.target.value)}
            className="w-full h-full outline outline-amber-100 text-amber-50 font-mono text-xl sm:text-2xl md:text-3xl p-2 caret-amber-400"
            placeholder="Enter markdown content..."
          />
          <div className="my-4 w-full flex justify-center gap-4">
            <Button
              btn_title="Create Slide"
              icon={<Save size={24} />}
              onClick={submitMarkdown}
            />
            <button className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition duration-300">
              Discard
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SlideCreate;
