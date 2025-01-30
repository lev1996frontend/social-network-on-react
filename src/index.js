import './index.css';
import * as serviceWorker from './serviceWorker';
import { rerenderEntireTree } from './render';
import state from './redux/state';

rerenderEntireTree(state)
// Если вы хотите, чтобы ваше приложение работало в оффлайне и загружалось быстрее, вы можете изменить
// unregister() на register() ниже. Это сопряжено с некоторыми подводными камнями.
// Узнайте больше о сервисных работниках: http://bit.ly/CRA-PWA
serviceWorker.unregister();
