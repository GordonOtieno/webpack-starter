import generatejoke from './generatejoke';
import './styles/main.css';
import laughing from './assets/test.svg';

const laughImg = document.getElementById('testImg');
laughImg.src = laughing;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generatejoke);

generatejoke();
