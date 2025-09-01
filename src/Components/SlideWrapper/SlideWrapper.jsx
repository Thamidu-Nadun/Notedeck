import {useEffect, useRef} from 'react';
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import 'reveal.js/plugin/highlight/monokai.css';

const SlideWrapper = ({markdown = '# Example'}) => {
  const deckDivRef = useRef (null);
  const deckRef = useRef (null);

  useEffect (() => {
    if (deckRef.current) return;

    const deck = new Reveal (deckDivRef.current, {
      transition: 'slide',
      plugins: [Markdown, Highlight],
      highlight: {
        escapeHTML: false,
      },
    });

    deck.initialize ().then (() => {
      deckRef.current = deck;
      deck.sync ();
    });

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy ();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn ('Reveal.js destroy call failed.' + e);
      }
    };
  }, []);

  useEffect (
    () => {
      if (deckRef.current) {
        deckRef.current.sync ();
      }
    },
    [markdown]
  );

  return (
    <div className="reveal" ref={deckDivRef} style={{height: '100vh'}}>
      <div className="slides">
        <section data-markdown="">
          <textarea
            data-template
            style={{display: 'none'}}
            value={markdown}
            readOnly
          />
        </section>
      </div>
    </div>
  );
};

export default SlideWrapper;
