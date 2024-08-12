import { h } from "preact";
import responsiveImageWebp from "../../public/responsive-image.png?format=webp";
import responsiveImageJpg from "../../public/responsive-image.png?format=jpg";
import responsiveImagePng from ".../../public/responsive-image.png?format=png";

export function App() {
  return (
    <div class="app">
      <h1>Responsive Image Example</h1>

        <img src={responsiveImageJpg.src} srcSet={responsiveImageJpg.srcSet}
          sizes="(max-width: 600px) 300px, (max-width: 1200px) 600px, 900px"
          alt="Example" loading="lazy" />

    </div>
  );
}
