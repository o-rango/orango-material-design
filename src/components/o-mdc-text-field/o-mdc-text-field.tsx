import {Component} from '@stencil/core';

@Component({
  tag: 'o-mdc-text-field',
  styleUrl: 'o-mdc-text-field.scss',
  shadow: true
})
export class MdcTextFieldComponent {
  render() {
    return (
      <div class="mdc-text-field">
        <input type="text" id="my-text-field" class="mdc-text-field__input"></input>
        <label class="mdc-text-field__label">Hint text</label>
        <div class="mdc-text-field__bottom-line"></div>
      </div>
    );
  }
}
