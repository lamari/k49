import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'k49',
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/styles/global.scss',
      ]
    })
  ],
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
