import { h } from 'preact';
import { HelloWorld } from './HelloWorld';
import responsiveImage from '../../public/responsive-image.png?sizes[]=300,sizes[]=600,sizes[]=900';

export function App() {
  return (
    <div class="app">
      <h1>Preact Webpack Jest Starter Pack</h1>
      <HelloWorld />
      <div class="responsive-image-container">
        <picture>
          <source
            type="image/webp"
            srcSet={responsiveImage.srcSet}
            sizes="(max-width: 300px) 300px, (max-width: 600px) 600px, 900px"
          />
          <img
            src={responsiveImage.src}
            srcSet={responsiveImage.srcSet}
            sizes="(max-width: 300px) 300px, (max-width: 600px) 600px, 900px"
            alt="Responsive Image"
            loading="lazy"
          />
        </picture>
      </div>
    </div>
  );
}
