// import {useLocation} from 'react-router-dom';
import SlideWrapper from '../../Components/SlideWrapper/SlideWrapper';

const mdContent = `
# Slide 1

This is the first slide.

---

# Slide 2

This is the second slide.
`.trim ();

const errorMdContent = `
# Error Loading Slides

There was an error loading your slides. Please try again.
`.trim ();

const SlidesView = () => {
  /**
   * getting markdown with useLocation make slide's items positions not as expected.
   */
  // const location = useLocation ();
  // const markdown =
  // location.state?.markdown || localStorage.getItem ('markdown') || mdContent;
  try {
    let markdown = localStorage.getItem ('markdown');
    if (!markdown) {
      markdown = mdContent;
      throw new Error ('No markdown found in localStorage');
    }

    return <SlideWrapper markdown={markdown} />;
  } catch (error) {
    console.error (error);
    return <SlideWrapper markdown={errorMdContent} />;
  }
};

export default SlidesView;
