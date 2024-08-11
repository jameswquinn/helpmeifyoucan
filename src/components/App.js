import { h } from 'preact';
import { HelloWorld } from './HelloWorld';
import responsiveImage from '../../public/responsive-image.png';

export function App() {
  const imageName = responsiveImage.split('/').pop().split('.')[0];
  const imageHash = responsiveImage.split('.').slice(-2)[0];
  const basePath = `/images/${imageName}.${imageHash}`;

  return (
    <div class="app">
      <h1>Preact Webpack Jest Starter Pack</h1>
      <HelloWorld />
      <div class="responsive-image-container">
        <picture>
          <source
            type="image/webp"
            srcSet={`${basePath}-300.webp 300w, ${basePath}-600.webp 600w, ${basePath}-900.webp 900w`}
            sizes="(max-width: 300px) 300px, (max-width: 600px) 600px, 900px"
          />
          <source
            type="image/jpeg"
            srcSet={`${basePath}-300.jpg 300w, ${basePath}-600.jpg 600w, ${basePath}-900.jpg 900w`}
            sizes="(max-width: 300px) 300px, (max-width: 600px) 600px, 900px"
          />
          <img
            src={`${basePath}-600.png`}
            srcSet={`${basePath}-300.png 300w, ${basePath}-600.png 600w, ${basePath}-900.png 900w`}
            sizes="(max-width: 300px) 300px, (max-width: 600px) 600px, 900px"
            alt="Responsive Image"
            loading="lazy"
          />
        </picture>
      </div>
    </div>
  );
}
