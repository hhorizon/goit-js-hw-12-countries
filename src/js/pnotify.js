import { alert, notice, info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

function noticeMsg(message) {
    error({
        text: message,
        closer: false,
        sticker: false,
        delay: 2000,
        addClass: 'noticeMsg',
        autoOpen: true,
    });
}
export default noticeMsg;