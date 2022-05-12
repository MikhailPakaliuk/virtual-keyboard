const keysRu = [
  ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del'],
  ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
  ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '▲', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'],
];

const keysRuSmall = [
  ['ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del'],
  ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'],
];

const keysEn = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del'],
  ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter'],
  ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '▲', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'],
];

const keysEnSmall = [
  ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Del'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '▲', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'],
];

const codes = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'OSLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],
];

let IsEnglish = false;

(function PaintKeyboard() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  document.body.append(wrapper);

  const headline = document.createElement('p');
  wrapper.append(headline);
  headline.innerHTML = 'RSS Виртуальная клавиатура';
  headline.classList.add('title');

  const textarea = document.createElement('textarea');
  textarea.classList.add('textarea');
  wrapper.append(textarea);

  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  wrapper.append(keyboard);

  for (let i = 0; i < 5; i += 1) {
    const row = document.createElement('div');
    row.classList.add('row');
    keyboard.append(row);

    for (let j = 0; j < keysRu[i].length; j += 1) {
      const key = document.createElement('div');
      key.classList.add('key');
      key.classList.add(codes[i][j]);
      row.append(key);

      let span = document.createElement('span');
      span.classList.add('ru');
      key.append(span);
      span.innerHTML = keysRu[i][j];

      span = document.createElement('span');
      span.classList.add('ru_small');
      key.append(span);
      span.innerHTML = keysRuSmall[i][j];

      span = document.createElement('span');
      span.classList.add('en');
      key.append(span);
      span.innerHTML = keysEn[i][j];

      span = document.createElement('span');
      span.classList.add('en_small');
      key.append(span);
      span.innerHTML = keysEnSmall[i][j];
    }
  }

  const describe = document.createElement('p');
  wrapper.append(describe);
  describe.innerHTML = 'Клавиатура создана в операционной системе Windows';
  describe.classList.add('description');

  const leng = document.createElement('p');
  wrapper.append(leng);
  leng.innerHTML = 'Для переключения языка комбинация: левыe shift + ctrl';
  leng.classList.add('language');
}());

let el = null;
const textarea = document.querySelector('.textarea');
let isCapsLockPressed = false;
let isShiftPressed = false;
let isControlPressed = false;

const button = document.querySelectorAll('.key');

document.querySelectorAll('.en').forEach((x) => x.classList.add('invisible'));
document.querySelectorAll('.en_small').forEach((x) => x.classList.add('invisible'));
document.querySelectorAll('.ru').forEach((x) => x.classList.add('invisible'));

function LanguageSwitch() {
  if (IsEnglish) {
    localStorage.setItem('SetEnglish', false);
    document.querySelectorAll('.en_small').forEach((x) => x.classList.add('invisible'));
    document.querySelectorAll('.ru_small').forEach((x) => x.classList.remove('invisible'));
    IsEnglish = false;
  } else {
    localStorage.setItem('SetEnglish', true);
    document.querySelectorAll('.en_small').forEach((x) => x.classList.remove('invisible'));
    document.querySelectorAll('.ru_small').forEach((x) => x.classList.add('invisible'));
    IsEnglish = true;
  }
}

function KeepStateCapsShiftCtrl() {
  const choiceLang = IsEnglish ? 'en' : 'ru';

  if (el.innerText === 'CapsLock') {
    if (isCapsLockPressed) {
      el.classList.remove('pressed');
      document.querySelectorAll(`.${choiceLang}`).forEach((x) => x.classList.add('invisible'));
      document.querySelectorAll(`.${choiceLang}_small`).forEach((x) => x.classList.remove('invisible'));
      isCapsLockPressed = false;
    } else {
      document.querySelectorAll(`.${choiceLang}`).forEach((x) => x.classList.remove('invisible'));
      document.querySelectorAll(`.${choiceLang}_small`).forEach((x) => x.classList.add('invisible'));
      isCapsLockPressed = true;
    }
    return;
  }

  if (el.innerText === 'Shift') {
    if (isShiftPressed) {
      el.classList.remove('pressed');
      isShiftPressed = false;
    } else {
      isShiftPressed = true;
    }
    if (isShiftPressed && isControlPressed) {
      LanguageSwitch();
    }
    return;
  }

  if (el.innerText === 'Ctrl') {
    if (isControlPressed) {
      el.classList.remove('pressed');
      isControlPressed = false;
    } else {
      isControlPressed = true;
    }
    if (isShiftPressed && isControlPressed) {
      LanguageSwitch();
      el.classList.remove('pressed');
    }
    return;
  }
  el.classList.remove('pressed');
}

function PressedBackspace() {
  if (el.classList.contains('Backspace') && textarea.selectionStart > 0) {
    textarea.setRangeText('', textarea.selectionStart - 1, textarea.selectionEnd);
    textarea.focus();
  }
}

function PressedDelete() {
  if (el.classList.contains('Delete')) {
    textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd + 1);
    textarea.focus();
  }
}

function PressedEnter() {
  if (el.classList.contains('Enter')) {
    textarea.setRangeText('\n', textarea.selectionStart, textarea.selectionEnd);
    textarea.focus();
  }
}

function PressedSpace() {
  if (el.classList.contains('Space')) {
    textarea.setRangeText(' ', textarea.selectionStart, textarea.selectionEnd, 'end');
    textarea.focus();
  }
}

function PressedTab() {
  if (el.classList.contains('Tab')) {
    el.returnValue = false;
    textarea.setRangeText('\t', textarea.selectionStart, textarea.selectionEnd, 'end');
    textarea.focus();
  }
}

function KeyboardEventHandling(event) {
  const { code } = event;
  if (event.type === 'keyup') {
    document.onkeyup = KeepStateCapsShiftCtrl;

    if (el.classList.contains('Backspace')) {
      PressedBackspace();
      return;
    }
    if (el.classList.contains('Delete')) {
      PressedDelete();
      return;
    }
    if (el.classList.contains('Enter')) {
      PressedEnter();
      return;
    }
    if (el.classList.contains('Space')) {
      PressedSpace();
      return;
    }
  }

  for (let i = 0; i < codes.length; i += 1) {
    for (let j = 0; j < codes[i].length; j += 1) {
      if (code === codes[i][j]) {
        el = document.querySelector(`.key.${code}`);
        event.preventDefault();

        if (el.classList.contains('pressed') && !(el.innerText === 'Backspace'
          || el.innerText === 'Ctrl'
          || el.innerText === 'Shift'
          || el.innerText === 'Tab'
          || el.innerText === 'CapsLock'
          || el.innerText === 'Alt'
          || el.innerText === 'Del'
          || el.innerText === 'Win'
          || el.innerText === 'Enter')) {
          textarea.value += `${el.innerText}`;
        }

        el.classList.add('pressed');
      }
    }
  }
}

document.querySelector('.textarea').onkeyup = KeyboardEventHandling;
document.querySelector('.textarea').onkeydown = KeyboardEventHandling;

function MouseEventHandling(event) {
  if (event.type === 'mousedown') {
    el = event.target;
    if (el.tagName === 'SPAN') {
      el = el.parentElement;
    }

    el.classList.add('pressed');
    document.onmouseup = KeepStateCapsShiftCtrl;

    if (el.classList.contains('Backspace')) {
      PressedBackspace();
      return;
    }
    if (el.classList.contains('Delete')) {
      PressedDelete();
      return;
    }
    if (el.classList.contains('Enter')) {
      PressedEnter();
      return;
    }
    if (el.classList.contains('Space')) {
      PressedSpace();
      return;
    }
    if (el.classList.contains('Tab')) {
      PressedTab();
      return;
    }
  }

  if (!(el.innerText === 'Backspace'
    || el.innerText === 'Ctrl'
    || el.innerText === 'Shift'
    || el.innerText === 'Tab'
    || el.innerText === 'CapsLock'
    || el.innerText === 'Alt'
    || el.innerText === 'Del'
    || el.innerText === 'Win'
    || el.innerText === 'Enter')) {
    textarea.value += `${el.innerText}`;
  }
}

for (let i = 0; i < button.length; i += 1) {
  button[i].onmousedown = MouseEventHandling;
}

if (localStorage.getItem('SetEnglish') === 'true') {
  LanguageSwitch();
}

document.addEventListener('keydown', (event) => {
  if (event.code === 'Tab') {
    event.preventDefault();
    PressedTab();
  }
});
