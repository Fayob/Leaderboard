import './style.css';
import postData from './module/post_data.js';
import renderList from './module/render_list.js';
import refresh from './module/refresh.js';

const submitButton = document.querySelector('.form_button');
const refreshButton = document.querySelector('.refresh_button');

document.addEventListener('DOMContentLoaded', renderList);
refreshButton.addEventListener('click', refresh);
submitButton.addEventListener('click', postData);
