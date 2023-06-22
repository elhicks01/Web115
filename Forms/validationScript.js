document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const inputField = document.getElementById('inputField');
  const inputValue = inputField.value.trim();

  const alphanumericRegex = /^[a-zA-Z0-9]+$/;

  if (alphanumericRegex.test(inputValue)) {
    alert ("Input is valid");
    event.target.submit();
  } else {
    alert ("Input should be alphanumeric");
  }
});
