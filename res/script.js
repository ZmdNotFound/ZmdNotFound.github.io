function redirectToPage(href) {
	window.location.href = href
}

document.addEventListener('DOMContentLoaded', function() {
  const showButton = document.getElementById('show-button');
  const closeButton = document.getElementById('close-button');
  const notification = document.getElementById('notification');
  const notificationMessage = document.getElementById('notification-message');

  showButton.addEventListener('click', () => {
    const copyText = showButton.getAttribute('data-copy-text');
    
    if (copyText) {
      navigator.clipboard.writeText(copyText)
        .then(() => {
          notificationMessage.textContent = '复制成功';
          notification.classList.add('show');
          setTimeout(() => {
            notification.classList.remove('show');
          }, 3000);
        })
        .catch((error) => {
          console.error('复制出错: ', error);
        });
    }
  });

  closeButton.addEventListener('click', () => {
    notification.classList.remove('show');
  });
});