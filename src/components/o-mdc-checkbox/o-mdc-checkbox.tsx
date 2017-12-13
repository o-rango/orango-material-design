import {Component, Prop, Element, CssClassMap , Event, EventEmitter} from '@stencil/core';

import MDCCheckboxFoundation from '@material/checkbox/foundation';
import {getCorrectEventName} from '@material/animation';
import {MDCRipple} from '@material/ripple';

@Component({
   tag: 'o-mdc-checkbox',
   styleUrl: 'o-mdc-checkbox.scss',
   shadow: true
  })
export class MdcCheckboxComponent {

  protected ripple : any;
  protected foundation : any;
  protected classes: any;
  protected styles: any;

  @Element()el : HTMLElement;
  @Prop()label : string;
  @Prop()name : string;
  @Prop()id : string;
  @Prop()checked : boolean;
  @Prop()indeterminate : boolean;
  @Prop()disabled : boolean;
  @Prop()alignEnd : boolean;
  @Prop()value : string = 'on';

  componentDidLoad() {
      const inputEl = this.el.shadowRoot.querySelector('.mdc-checkbox__native-control');
      const rootEl = this.el.shadowRoot.querySelector('.mdc-checkbox');
      this.foundation = new MDCCheckboxFoundation({
        addClass: (className) => this.classes = className,
        removeClass: (className) => this.classes = className,
        registerAnimationEndHandler: (handler) => rootEl.addEventListener(getCorrectEventName(window, 'animationend'), handler),
        deregisterAnimationEndHandler :(handler) =>  rootEl.removeEventListener(getCorrectEventName(window, 'animationend'), handler),
        registerChangeHandler : (handler) => inputEl.addEventListener('change', handler),
        deregisterChangeHandler : (handler) => inputEl.removeEventListener('change', handler),
        getNativeControl: () =>  inputEl,
        isAttachedToDOM: () => Boolean(this.el.parentNode)
      });

      this.foundation.init()
      this.foundation.setChecked(this.checked)
      this.foundation.setDisabled(this.disabled)
      this.foundation.setIndeterminate(this.indeterminate);

      this.ripple = MDCRipple.attachTo(inputEl);
  }

  componentDidUnload() {
    this.foundation.destroy();
    this.ripple.destroy();
  }

  @Event() change: EventEmitter;
  handleChange(evt){
    this.change.emit(this.foundation.isChecked());
  };
  render() {
    const _uid : string = `${this.id}-checkbox-label`;
    const formFieldClasses : CssClassMap = {
      'mdc-checkbox-wrapper': true,
      'mdc-form-field': this.label.length > 0,
      'mdc-form-field--align-end': this.label.length > 0 && this.alignEnd
    }

    const checkBoxClasses = {
       'mdc-checkbox' : true
    }
    const elementClasses : CssClassMap = {
      ...checkBoxClasses,
      ...this.classes
     }
    debugger
    return (
      <div class={formFieldClasses}>
        <div class={checkBoxClasses}>
          <input type="checkbox" onChange={() => this.handleChange(event)} id={this.id} value={this.value} class="mdc-checkbox__native-control"/>
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
