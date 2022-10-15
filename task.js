const containerText = [
    'Mы ещё не проснулись. Позвоните через 10 лет',
    'У вас совесть есть?',
    'Кто тут?',
    'Повторите, я плохо вижу',
    'К сожалению все операторы пьют чай, не пишите нам больше',
    'Мы ни чего вам продавать не будем!',
    'А это не вы товар получили, а заплатить забыли?',
    'Что-то мне ваш голос знаком!',
    'Вот и поговорили. Рады были помочь! Снова не обращайтесь!'
];
const div = document.querySelector('.chat-widget__messages-container')
let messageBot = 'Добрый день! Досвидания!';
const chatMessages = document.querySelector('.chat-widget')
const input = document.getElementById('chat-widget__input')
const chatWidget = document.querySelector('.chat-widget__side-text')
const messageOut = document.querySelector( '.chat-widget__messages' );
let timer;

function time() {
    let time = new Date;
    let hours = time.getHours();
    let minutes = ('0' + time.getMinutes()).slice(-2);

    return hours + ':' + minutes
}

function textBot() {
    chatMessages.classList.add('chat-widget_active');
    messageOut.innerHTML += `
        <div class="message">
            <div class="message__time">${time()}</div>
            <div class="message__text">
            ${messageBot}
            </div>
        </div>
        `;
    let idu = Math.floor(Math.random() * containerText.length);
    messageBot = containerText[idu];
    div.scrollTop =div.scrollHeight;
    timer = setTimeout(() => {
        messageOut.innerHTML += `
            <div class="message">
                <div class="message__time">${time()}</div>
                <div class="message__text">
                Закройте окно - сквозит!
                </div>
            </div>
            `;
        div.scrollTop =div.scrollHeight;
    }, 30000)
}

function userMessage() {
    clearTimeout(timer)
    messageOut.innerHTML += `
    <div class="message message_client">
        <div class="message__time">${time()}</div>
        <div class="message__text">${input.value}</div>
    </div>`;
    input.value = ''
    div.scrollTop =div.scrollHeight;
    setTimeout(() => { 
        textBot();
        }, 1000)
}

chatWidget.onmouseover = () => {
    chatWidget.style.background = 'green';
    chatWidget.style.borderRadius = '0 20px 0 0';
    chatWidget.textContent = 'Не пишите нам, мы офлайн!';
}
chatWidget.onmouseout = () => {
    chatWidget.style.background = '';
    chatWidget.textContent = 'Напишите нам, мы онлайн!';
}
chatWidget.onclick = () => {
    chatMessages.classList.add('chat-widget_active');
    textBot()
};

input.addEventListener('change', userMessage)
