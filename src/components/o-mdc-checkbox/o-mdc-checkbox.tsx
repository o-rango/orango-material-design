import {
  Component,
  Prop,
  Element,
  CssClassMap,
  Event,
  EventEmitter
} from '@stencil/core';
import { MDCCheckboxFoundation } from '@material/checkbox/';
import { MDCFormField, MDCFormFieldFoundation } from '@material/form-field';
import { getCorrectEventName } from '@material/animation';
import { RippleAdapter } from '../utils/ripple-adapter';

//import {MDCFormField, MDCFormFieldFoundation} from '@material/form-field';
//import { MDCCheckboxFoundation } from '@material/checkbox/foundation';

@Component({
  tag: 'o-mdc-checkbox',
  styleUrl: 'o-mdc-checkbox.scss',
  shadow: true
})
export class MdcCheckboxComponent {
  protected mdcRipple: any;
  protected mdcCheckbox: any;
  protected mdcFormField: any;
  protected styles: any;

  @Element() el: HTMLElement;
  @Prop() label: string;
  @Prop() name: string;
  @Prop({ mutable: true })
  checked: boolean = false;
  @Prop({ mutable: true })
  indeterminate: boolean = false;
  @Prop({ mutable: true })
  disabled: boolean;
  @Prop() id: string;
  @Prop() value: string;
  @Prop() alignEnd: boolean;

  componentDidLoad() {
    const inputEl = this.el.shadowRoot.querySelector('input');
    const rootEl = this.el.shadowRoot.querySelector('.mdc-checkbox');

    /*const formEl = this.el.shadowRoot.querySelector('.mdc-form-field');
      this.mdcFormField = new MDCFormField(formEl);
      */

    this.mdcCheckbox = new MDCCheckboxFoundation({
      addClass: (className: string) => {
        rootEl.classList.add(className);
      },
      removeClass: (className: string) => {
        rootEl.classList.remove(className);
      },
      registerAnimationEndHandler: (handler: EventListener) => {
        rootEl.addEventListener(
          getCorrectEventName(window, 'animationend'),
          handler
        );
      },
      deregisterAnimationEndHandler: (handler: EventListener) => {
        rootEl.removeEventListener(
          getCorrectEventName(window, 'animationend'),
          handler
        );
      },
      registerChangeHandler: (handler: EventListener) => {
        inputEl.addEventListener('change', handler);
      },
      deregisterChangeHandler: (handler: EventListener) => {
        inputEl.removeEventListener('change', handler);
      },
      getNativeControl: () => {
        return inputEl;
      },
      forceLayout: () => {
        return inputEl.offsetWidth;
      },
      isAttachedToDOM: () => Boolean(this.el.parentNode)
    });

    this.mdcCheckbox.init();
    this.mdcCheckbox.setChecked(this.checked);
    this.mdcCheckbox.setDisabled(this.disabled);
    this.mdcCheckbox.setIndeterminate(this.indeterminate);
    this.mdcRipple = new RippleAdapter(rootEl, {
      isUnbounded: () => true,
      isSurfaceActive: () => true,
      registerInteractionHandler: (evt: string, handler: EventListener) => {
        rootEl.addEventListener(evt, handler);
      },
      deregisterInteractionHandler: (evt: string, handler: EventListener) => {
        rootEl.removeEventListener(evt, handler);
      },
      computeBoundingRect: () => {
        const { left, top } = inputEl.getBoundingClientRect();
        const DIM = 40;
        return {
          top,
          left,
          right: left + DIM,
          bottom: top + DIM,
          width: DIM,
          height: DIM
        };
      }
    });
    this.mdcRipple.init();
  }

  componentDidUnload() {
    this.mdcCheckbox.destroy();
    this.mdcRipple.destroy();
    this.mdcFormField.destroy();
  }

  render() {
    return (
      <div class="mdc-checkbox">
        <input
          type="checkbox"
          id={this.id}
          class="mdc-checkbox__native-control"
        />
        <div class="mdc-checkbox__background">
          <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
            <path
              class="mdc-checkbox__checkmark__path"
              fill="none"
              stroke="white"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"
            />
          </svg>
          <div class="mdc-checkbox__mixedmark" />
        </div>
      </div>
    );
  }
}
