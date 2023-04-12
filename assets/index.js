const inputElement = document.getElementById('inputName');
function editName(name) {
  name = name.trim().replace(/\s+/g, ' ');
  name = name.toLowerCase().replace(/\b\w/g, function(l) { return l.toUpperCase(); });
  return name;
}
editName(name);
inputElement.addEventListener('input', function(event) {
  const name = event.target.value;
  const editedName = editmName(name);
  inputElement.textContent = editedName;
});

  const textInput = document.getElementById('textInput');
  const submitButton = document.getElementById('submitMessage');
  const messageShow = document.getElementById('messageShow');

  function checkSpam(str) {
    const spamWords = ['viagra', 'xxx'];
    const lowerCaseStr = str.toLowerCase();
    for (let i = 0; i < spamWords.length; i++) {
      lowerCaseStr = lowerCaseStr.replace(spamWords[i], '***');
    }
    return lowerCaseStr;
  }
  checkSpam(str);
  function addMessageToList(message) {
    const listItem = document.createElement('li');
    listItem.textContent = message;
    messageList.appendChild(listItem);
  }
  addMessageToList(message);
  submitButton.addEventListener('click', function(event) {
    const message = messageInput.value;
    const checkedMessage = checkSpam(message);
    addMessageToList(checkedMessage);
    textInput.value = '';
  });
