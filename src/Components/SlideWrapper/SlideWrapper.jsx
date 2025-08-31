import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import {useEffect, useRef} from 'react';

const SlideWrapper = ({markdown = '# Example'}) => {
  const deckDivRef = useRef (null);
  const deckRef = useRef (null);

  useEffect (() => {
    if (deckRef.current) return;

    const deck = new Reveal (deckDivRef.current, {
      transition: 'slide',
      plugins: [Markdown],
    });

    deck.initialize ().then (() => {
      deck.sync ();
      deckRef.current = deck;
    });

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy ();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn ('Reveal.js destroy call failed.');
      }
    };
  }, []);

  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        <section data-markdown="">
          <script type="text/template">
            {markdown}
          </script>
        </section>
      </div>
    </div>
  );
};

export default SlideWrapper;
