import '../src/css/main.css';
import { secretButton, secret } from './js/dom-loader';

var showSecret = false;

secretButton.addEventListener('click', toggleSecretState);
updateSecret();

function toggleSecretState() {
    showSecret = !showSecret;
    updateSecret();
    updateSecretButton();
}

function updateSecretButton() {
    if (showSecret) {
        secretButton.textContent = "Hide it!";
    } else {
        secretButton.textContent = "Show it!";
    }
}

function updateSecret() {
    if (showSecret) {
        secret.style.display = 'block';
    } else {
        secret.style.display = 'none';
    }
}