let feedback = {
    atendimento: '',
    sistema: '',
    comentarios: ''
};

function vote(category, choice) {
    feedback[category] = choice;

    const categoryButtons = document.querySelectorAll(`.option[data-category='${category}']`);
    categoryButtons.forEach(btn => {
        if (btn.classList.contains(choice)) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });
}

function submitFeedback() {
    feedback.comentarios = document.getElementById('comentarios').value;
    console.log('Feedback enviado:', feedback);
    alert('Obrigado pelo seu feedback!');
}
