function alternarModo() {
  document.body.classList.toggle('dark-mode');
}

function enviarWhatsApp(event) {
  event.preventDefault();
  const nome = document.getElementById('nome').value;
  const mensagem = document.getElementById('mensagem').value;
  const texto = `Olá, meu nome é ${nome}. ${mensagem}`;
  const fone = '55216672987'; // Coloque seu número com DDD
  const url = `https://wa.me/${fone}?text=${encodeURIComponent(texto)}`;
  window.open(url, '_blank');
}
