const init = () => {
  const element = document.createElement('div');

  element.style.position = 'fixed';
  element.style.border = '20px solid rgba(255, 0, 0, 0.2)';
  element.style.inset = '0';
  element.style.zIndex = 'calc(infinity)';
  element.style.pointerEvents = 'none';

  document.body.appendChild(element);
};

init();
