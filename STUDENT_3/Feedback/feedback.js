  const messageField = document.getElementById('message');
  const charCountDisplay = document.getElementById('char-count');

  messageField.addEventListener('input', () => {
    const currentLength = messageField.value.length;
    const maxLength = messageField.getAttribute('maxlength') || 500;
    charCountDisplay.textContent = `${currentLength} / ${maxLength} characters`;
  });