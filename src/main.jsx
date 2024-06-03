import React from 'react';

import { version } from '../package.json';

export default function Component() {
  console.log('version', version)

  return (
    <div>hello world!!</div>
  )
}