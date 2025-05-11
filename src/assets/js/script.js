document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM carregado!');

    const inputMSG = document.querySelector('#inputMensagem');
    const buttons = document.querySelectorAll('.cursor-pointer');
    const btnSend = document.querySelector(".cursor-pointer[src*='send']");
    const listaMensagens = document.querySelector('.messages');
    const lightDark = document.querySelector('#light-dark-mode');

    lightDark.addEventListener('click', () => {
        const sidebar = document.querySelector('.side-bar');
        const leftbar = document.querySelector('.left-bar');
        const contactName = document.querySelectorAll('.users-name-left');
        const contactNameActive = document.querySelector('.user-name');
        const contactActive = document.querySelector('.contact-active');
        const iconeDark = document.getElementById('light-dark-mode');
        const isLight = leftbar.classList.contains('background-white');

        if (isLight) {
            leftbar.classList.remove('background-white');
            sidebar.classList.remove('background-white');

            leftbar.classList.add('background-dark');
            sidebar.classList.add('background-dark');

            contactActive.classList.remove('background-light-gray');
            contactActive.classList.add('background-dark-gray');

            contactName.forEach((name) => {
                name.classList.remove('color-black');
                name.classList.add('color-white');
            });

            contactNameActive.classList.remove('color-black');
            contactNameActive.classList.add('color-white');

            iconeDark.src = 'src/assets/icons/light-mode.png';

        } else {
            leftbar.classList.remove('background-dark');
            sidebar.classList.remove('background-dark');

            leftbar.classList.add('background-white');
            sidebar.classList.add('background-white');

            contactName.forEach((name) => {
                name.classList.remove('color-white');
                name.classList.add('color-black');
            });

            contactActive.classList.remove('background-dark-gray');
            contactActive.classList.add('background-light-gray');

            contactNameActive.classList.remove('color-white');
            contactNameActive.classList.add('color-black');

            iconeDark.src = 'src/assets/icons/dark-mode.png';
        }
    });

    const respostasAutomaticas = [
        'Oi, tudo bem?',
        'Como você está?',
        'Como posso ajudar?',
        'Meu nome é O NOVO BOT!',
        'Você quer conversar comigo?',
        'O seu trabalho está muito legal!',
    ];

    function enviarMensagem() {
        const texto = inputMSG.value.trim();

        if (texto === '') {
            alert('Você não digitou nada!');
        } else {
            adicionarMensagem("enviada", texto);
            inputMSG.value = ""

            setTimeout(responderMensagem, 2000);
        }
    }

    function responderMensagem() {
        const posicao = Math.floor(Math.random() * respostasAutomaticas.length);
        const mensagemDoBot = respostasAutomaticas[posicao];
        adicionarMensagem("recebida", mensagemDoBot);
    }

    function adicionarMensagem(tipoMensagem, texto,) {
        const mensagemElement = document.createElement('div');

        mensagemElement.classList.add('message', 'fade-in');

        if (tipoMensagem === 'enviada') {
            mensagemElement.classList.add('you');
        } else {
            mensagemElement.classList.add('other');
        }

        mensagemElement.innerText = texto;
        listaMensagens.appendChild(mensagemElement);

        setTimeout (() => {
            mensagemElement.classList.remove('fade-in')
        }, 500);
    }

    btnSend.addEventListener('click', () => {
        enviarMensagem();
    });

    inputMSG.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            enviarMensagem();
        }
    });


});