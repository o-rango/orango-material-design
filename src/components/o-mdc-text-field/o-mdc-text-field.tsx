import { Component , Element , Prop} from '@stencil/core';
import { MDCTextField } from "@material/textfield";

@Component({
  tag: 'o-mdc-text-field',
  styleUrl: 'o-mdc-text-field.scss',
  shadow: true
})
export class MdcTextFieldComponent {
  private mdcTextFields: any;
  @Element() el: HTMLElement;
  @Prop() label : string = '';

  componentDidLoad() {
    const rootEl = this.el.shadowRoot.querySelector('.mdc-text-field');
    this.mdcTextFields = new MDCTextField(rootEl);
  }

  componentDidUnload() {
    this.mdcTextFields.destroy();
  }
  render() {
    return (
      <div class="mdc-text-field">
        <input type="text" id="my-text-field" class="mdc-text-field__input"/>
        <label class="mdc-text-field__label" htmlFor="my-text-field">{this.label}</label>
        <div class="mdc-text-field__bottom-line"/>
      </div>
    );
  }
}
