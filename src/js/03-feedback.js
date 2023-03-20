import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const massage = document.querySelector('textarea[name="massage"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener(
    'input',
    throttle(e => {
        const objectToSave = { email: email.value, message: massage.value };
        
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectToSave));
    }, 500)
);

form.addEventListener('submit', e => {
    e.preventDefault();

    if (email.value === '' || massage.value === '') {
        return alert('Заповніть всі поля!');
    }

    console.log({ email: email.value, massage: massage.value });

    form.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
});


const load = key => {
    try {
        const serializedState = localStorage.getItem(key);

        return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch(error) {
        console.error('Get State error: ', error.massage);
    }
};

const strogeData = load(LOCALSTORAGE_KEY);

if (strogeData) {
    email.value = strogeData.email;
    massage.value = strogeData.massage;
};