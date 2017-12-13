import {Component, Prop, Element, CssClassMap , Event, EventEmitter} from '@stencil/core';
import { MDCCheckbox } from "@material/checkbox/";
import {MDCRipple} from '@material/ripple';
import {MDCFormField} from '@material/form-field';
@Component({
   tag: 'o-mdc-checkbox',
   styleUrl: 'o-mdc-checkbox.scss',
   shadow: true
  })
export class MdcCheckboxComponent {

  protected mdcRipple : any;
  protected mdcCheckbox : any;
  protected mdcFormField: any;
  protected styles: any;

  @Element()el : HTMLElement;
  @Prop()label : string;
  @Prop()name : string;
  @Prop({ mutable: true })checked : boolean = false;
  @Prop({ mutable: true })indeterminate : boolean = false;;
  @Prop({ mutable: true })disabled : boolean;
  @Prop()id : string;
  @Prop()alignEnd : boolean;

  componentDidLoad() {
      const inputEl = this.el.shadowRoot.querySelector('input');
      const rootEl = this.el.shadowRoot.querySelector('.mdc-checkbox');
      this.mdcCheckbox = new MDCCheckbox(rootEl);
      this.mdcFormField  = new MDCFormField(rootEl.parentElement);
      this.mdcRipple =  new MDCRipple(inputEl);
      this.mdcCheckbox.foundation_.setChecked(this.checked)
      this.mdcCheckbox.foundation_.setDisabled(this.disabled)
      this.mdcCheckbox.foundation_.setIndeterminate(this.indeterminate)
  }

  componentDidUnload() {
    this.mdcCheckbox.destroy();
    this.mdcFormField.destroy();
    this.mdcRipple.destroy();
  }

  render() {
    const _uid : string = `${this.id}-checkbox-label`;
    const formFieldClasses : CssClassMap = {
      'mdc-form-field': this.label.length > 0,
      'mdc-form-field--align-end': this.label.length > 0 && this.alignEnd
    }

    return (
      <div class={formFieldClasses}>
        <div class="mdc-checkbox">
          <input type="checkbox" id={this.id} class="mdc-checkbox__native-control" disabled={this.disabled}/>
          <div class="mdc-checkbox__background">
            <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
              <path
                class="mdc-checkbox__checkmark__path"
                fill="none"
                stroke="white"
                d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
            </svg>
            <div class="mdc-checkbox__mixedmark"></div>
          </div>
        </div>
           <label id={_uid} htmlFor={this.id} >{this.label}</label>
      </div>
    );
  }
}
