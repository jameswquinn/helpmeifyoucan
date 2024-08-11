import { h } from 'preact';
import { useState } from 'preact/hooks';

export function HelloWorld() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Hello, World!</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
