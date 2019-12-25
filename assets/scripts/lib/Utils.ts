export default {
  showToast: (() => {
    let curNode = null;
    let timer = null;
    return (text = '', dur = 1500) => {
      if (curNode) {
        document.body.removeChild(curNode);
        clearInterval(timer);
      }
      let div = document.createElement('div');
      div.style.cssText = `
                position: fixed;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            `;
      let span = document.createElement('span');
      span.style.cssText = `
                background: rgba(0, 0, 0, 0.7);
                padding: 5px 10px;
                font-size: 13px;
                color: #fff;
                border-radius: 5px;
            `;
      span.innerText = text;
      div.appendChild(span);
      document.body.appendChild(div);
      curNode = div;
      timer = setTimeout(() => {
        document.body.removeChild(curNode);
        curNode = null;
      }, dur);
    };
  })()
};
