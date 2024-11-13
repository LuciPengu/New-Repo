document.addEventListener('DOMContentLoaded', function() {
  // Handle button clicks
  document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
      handleAction(this.id);
    });
  });

  // Handle keyboard shortcuts
  document.addEventListener('keydown', function(e) {
    if (e.ctrlKey) {
      switch(e.key) {
        case '1':
          e.preventDefault();
          handleAction('action1');
          break;
        case '2':
          e.preventDefault();
          handleAction('action2');
          break;
        case '3':
          e.preventDefault();
          handleAction('action3');
          break;
      }
    }
  });

  function handleAction(action) {
    // Send message to active tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: action });
    });

    // You can also handle the action directly in the popup if needed
    switch(action) {
      case 'action1':
        console.log('Action 1 triggered');
        break;
      case 'action2':
        console.log('Action 2 triggered');
        break;
      case 'action3':
        console.log('Action 3 triggered');
        break;
    }
  }
});