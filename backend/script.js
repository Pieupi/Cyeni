// Mostra o botão depois da animação de fade out
setTimeout(() => {
  document.getElementById('welcome-screen').style.display = 'none';
  document.getElementById('enter-button').style.display = 'block';
}, 3000);

function enterSite() {
  window.location.href = './pagina-inicial/index.html'; // Aqui você coloca o nome da página inicia
  alert('BEM-VINDO(a) A CENTRAL FÊNIX');
}