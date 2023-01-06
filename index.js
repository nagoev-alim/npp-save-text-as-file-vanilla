// ⚡️ Import Styles
import feather from 'feather-icons';
import './style.scss';

// ⚡️ Render Skeleton
document.querySelector('#app').innerHTML = `
<div class='app-container'>
  <div class='save-file'>
    <h3 class='title'>Save Text As File</h3>
    <textarea spellcheck='false' placeholder='Enter something to save' data-textarea=''>It's Only After We've Lost Everything That We're Free To Do Anything.</textarea>
    <label>
      <span class='label'>File name</span>
      <input type='text' data-input='' placeholder='Enter file name'>
    </label>
    <label>
      <span class='label'>Save as</span>
      <select data-select=''>
        <option value='text/plain'>Text File (.txt)</option>
        <option value='text/javascript'>JS File (.js)</option>
        <option value='text/html'>HTML File (.html)</option>
        <option value='image/svg+xml'>SVG File (.svg)</option>
        <option value='application/msword'>Doc File (.doc)</option>
        <option value='application/vnd.ms-powerpoint'>PPT File (.ppt)</option>
      </select>
    </label>
    <button data-submit=''>Save As Text File</button>
  </div>

  <a class='app-author' href='https://github.com/nagoev-alim' target='_blank'>${feather.icons.github.toSvg()}</a>
</div>`;

// ⚡️ Create class
class App {
  constructor() {
    this.DOM = {
      textarea: document.querySelector('[data-textarea]'),
      input: document.querySelector('[data-input]'),
      select: document.querySelector('[data-select]'),
      submit: document.querySelector('[data-submit]'),
    };

    this.DOM.submit.addEventListener('click', this.onSubmit);
    this.DOM.select.addEventListener('change', this.onChange);
  }

  /**
   * @function onSubmit - Save
   */
  onSubmit = () => {
    const blob = new Blob([this.DOM.textarea.value], { type: this.DOM.select.value });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = this.DOM.input.value;
    link.href = url;
    link.click();
  };

  /**
   * @function onChange - Select change event handler
   */
  onChange = () => {
    this.DOM.submit.innerText = `Save As ${this.DOM.select.options[this.DOM.select.selectedIndex].text.split(' ')[0]} File`;
  };
}

// ⚡️ Class instance
new App();
