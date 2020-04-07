import React, { useState, useEffect } from 'react';

export default function HComp() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Use effect call/ mounted');

    return () => {
      console.log('Unmounted');
    };
  });

  return (
    <button className='test' onClick={() => setCount(count + 1)}>
      Increase {count}
    </button>
  );
}
