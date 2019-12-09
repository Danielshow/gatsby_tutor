import React, {useState} from 'react';
import { css } from '@emotion/core';

const Wave = () => {
  const [wave, setWave] = useState(2);
  const label = `👋 ${wave} ${wave === 1 ? 'wave' : 'waves'}`;

  return (
    <button
      css={css`
        background: rebeccapurple;
        border: none;
        color: white;
        font-size: 1.25rem;
      `}

      onClick={() => setWave(wave + 1)}
    >
      {label}
    </button>
  )
}

export default Wave;