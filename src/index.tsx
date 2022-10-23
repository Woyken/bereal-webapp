/* @refresh reload */
import { render } from 'solid-js/web';

import css from './index.module.css';

document.body.className = css['body-no-margin'];

render(() => <div />, document.getElementById('root') as HTMLElement);
