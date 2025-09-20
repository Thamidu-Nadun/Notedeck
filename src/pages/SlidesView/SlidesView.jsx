import {useLocation} from 'react-router-dom';
import SlideWrapper from '../../Components/SlideWrapper/SlideWrapper';

const mdContent = `
# Slide 1

This is the first slide.

---

# Slide 2

This is the second slide.
`.trim ();

const SlidesView = () => {
  const location = useLocation ();
  const markdown =
    location.state?.markdown || localStorage.getItem ('markdown') || mdContent;

  return <SlideWrapper markdown={markdown} />;
};

export default SlidesView;
