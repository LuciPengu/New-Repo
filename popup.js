document.addEventListener('DOMContentLoaded', function() {
  // Handle button clicks
  document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
      handleAction(this.id);
    });
  });

  // Handle keyboard shortcuts
  document.addEventListener('keydown', function(e) {
    switch(e.key.toLowerCase()) {
      case 's':
        handleAction('analyze');
        break;
      case 'a':
        handleAction('toggleResult');
        break;
      case 'q':
        handleAction('toggleExtra');
        break;
      case 'w':
        handleAction('toggleEval');
        break;
      case 'e':
        handleAction('getFen');
        break;
    }
  });

  function handleAction(action) {
    // Send message to active tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: action });
    });
  }
});