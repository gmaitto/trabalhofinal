const display = document.getElementById('display');
// const themeToggle = document.getElementById('theme-toggle');

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function delChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value.replace('×', '*'));
  } catch {
    display.value = 'Erro';
  }
}

// // Trocar tema (escuro/claro)
// themeToggle.addEventListener('change', () => {
//   document.body.classList.toggle('light-theme');
// });

// // (opcional) Estilo claro se quiser adicionar:
// document.body.classList.toggle('light-theme', false);
