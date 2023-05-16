import { createElement } from '@lwc/engine-dom';;
import MyApp from './my_lwc/my_lwc'

const app = createElement('my-app', { is: MyApp });
const mainElement = document.querySelector('#main')
if(mainElement) mainElement.appendChild(app);
