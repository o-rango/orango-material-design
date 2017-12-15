import { Component, Prop, Element, CssClassMap } from '@stencil/core';

import { MDCRadio } from '@material/radio';
import { MDCRipple } from '@material/ripple';
@Component({ tag: 'o-mdc-radio', styleUrl: 'o-mdc-radio.scss', shadow: true })
export class MdcRadioComponent {
  private ripple: any;
  private foundation: any;
  @Element() MdcRadioEl: HTMLElement;
  @Prop() name: string;
  @Prop() id: string;
  @Prop() checked: boolean;
  @Prop() value: string;
  @Prop() disabled: boolean;
  @Prop() label: string;
  @Prop() alignEnd: boolean;

  componentDidLoad() {
    const el = this.MdcRadioEl.shadowRoot.querySelector('.mdc-radio');
    //this.foundation  =MDCRadio.attachTo(this.MdcRadioEl.shadowRoot.querySelector('.mdc-radio'));
    /*this.foundation = new MDCRadioFoundation({
    addClass: (className) => el.classList.toggle( className, true),
    removeClass: (className) => el.classList.toggle( className, false),
    getNativeControl: () => this.MdcRadioEl.shadowRoot.querySelector('input')
   });
   this.foundation.init()
   this.foundation.setValue(this.value ? this.value : this.label)
   this.foundation.setDisabled(this.disabled)
   this.foundation.setChecked(this.checked)

   */
    this.foundation = MDCRadio.attachTo(el);
    this.ripple = MDCRipple.attachTo(el);
  }

  componentDidUnload() {
    this.foundation.destroy();
    this.ripple.destroy();
  }

  render() {
    const _uid: string = `${this.id}-label`;
    const formFieldClasses: CssClassMap = {
      'mdc-radio-wrapper': true,
      'mdc-form-field': this.label.length > 0,
      'mdc-form-field--align-end': this.label.length > 0 && this.alignEnd
    };
    const radioClasses: CssClassMap = {
      'mdc-radio': true
    };
    return (
      <div class="demo-radio-row">
        <div class="mdc-form-field">
          <div class="mdc-radio">
            <input
              class="mdc-radio__native-control"
              type="radio"
              id="ex0-default-radio1"
              checked
              name="ex0-default"
            />
            <div class="mdc-radio__background">
              <div class="mdc-radio__outer-circle" />
              <div class="mdc-radio__inner-circle" />
            </div>
          </div>
          <label id="ex0-default-radio1-label" htmlFor="ex0-default-radio1">
            Default Radio 1
          </label>
        </div>
        <div class="mdc-form-field">
          <div class="mdc-radio">
            <input
              class="mdc-radio__native-control"
              type="radio"
              id="ex0-default-radio2"
              name="ex0-default"
            />
            <div class="mdc-radio__background">
              <div class="mdc-radio__outer-circle" />
              <div class="mdc-radio__inner-circle" />
            </div>
          </div>
          <label id="ex0-default-radio2-label" htmlFor="ex0-default-radio2">
            Default Radio 2
          </label>
        </div>
      </div>
    );
  }
}
