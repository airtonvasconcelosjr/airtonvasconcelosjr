
(function() {

  const contactForm = document.getElementById('contact');

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  contactForm.addEventListener('submit', function() {

    const nameValue = nameInput.value;
    const nameLength = nameValue.length;
    const emailValue = emailInput.value;
    const emailLength = emailValue.length;
    const messageValue = messageInput.value;
    const messageLength = messageValue.length;
    if (nameValue.length,emailValue.length < 3) {
      window.alert('Favor Preencher todos os campos!')
      preventDefault()
    }

    if (messageValue.length < 5) {
      window.alert('Insira uma mensagem com no mínimo 5 caracteres..')
      preventDefault()
    }else{
    window.alert(`Recebemos a mensagem: "${messageValue}" e estamos profundamente agradecidos. `)
      return true
    }
  });
})();
