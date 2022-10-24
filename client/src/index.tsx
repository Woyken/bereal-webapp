/* @refresh reload */
import { render } from 'solid-js/web';
import App from './app';

import css from './index.module.css';

document.body.className = css['body-no-margin'];

render(() => <App />, document.getElementById('root') as HTMLElement);
