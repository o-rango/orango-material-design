import {
  Component,
  Prop,
  Element,
  CssClassMap,
  EventEmitter
} from '@stencil/core';
import { MDCToolbar, MDCToolbarFoundation, util } from '@material/toolbar';

@Component({
  tag: 'o-mdc-toolbar',
  styleUrl: 'o-mdc-toolbar.scss',
  shadow: true
})
export class MdcToolbarComponent {
  private foundation: any;

  @Element() MdcToolbarEl: HTMLElement;
  @Prop() name: string;
  @Prop() id: string;

  @Prop() fixed: boolean;
  @Prop() waterfall: boolean;
  @Prop() fixedLastrow: boolean;
  @Prop() flexible: boolean;
  @Prop() flexibleDefault: boolean;

  componentDidLoad() {
    const rootEl = this.MdcToolbarEl.shadowRoot.querySelector('.mdc-toolbar');
    this.foundation = new MDCToolbarFoundation({
      addClass: className => {
        rootEl.classList.add(className);
      },
      removeClass: className => {
        rootEl.classList.remove(className);
      },
      hasClass: className => {
        return rootEl.classList.contains(className);
      },
      registerScrollHandler: handler => {
        window.addEventListener('scroll', handler, util.applyPassive());
      },
      deregisterScrollHandler: handler => {
        window.removeEventListener('scroll', handler, util.applyPassive());
      },
      registerResizeHandler: handler => {
        window.addEventListener('resize', handler);
      },
      deregisterResizeHandler: handler => {
        window.removeEventListener('resize', handler);
      },
      getViewportWidth: () => {
        return window.innerWidth;
      },
      getViewportScrollY: () => {
        return window.pageYOffset;
      },
      getOffsetHeight: () => {
        return this.MdcToolbarEl.offsetHeight;
      },

      getFirstRowElementOffsetHeight: () => {
        let el = rootEl.querySelector(
          MDCToolbarFoundation.strings.FIRST_ROW_SELECTOR
        );
        return el ? el.offsetHeight : undefined;
      },
      notifyChange: evtData => {
        //this.$emit('change', evtData)
      },
      setStyle: (styleProperty, value) => {
        rootEl.setAttribute('style', (styleProperty = value));
      },
      setStyleForTitleElement: (property, value) => {
        let el = rootEl.querySelector(
          MDCToolbarFoundation.strings.TITLE_SELECTOR
        );
        if (el) el.style.setProperty(property, value);
      },
      setStyleForFlexibleRowElement: (property, value) => {
        let el = rootEl.querySelector(
          MDCToolbarFoundation.strings.FIRST_ROW_SELECTOR
        );
        if (el) el.style.setProperty(property, value);
      },
      setStyleForFixedAdjustElement: (styleProperty, value) => {
        rootEl.setAttribute('style', (styleProperty = value));
      }
    });

    this.foundation.init();
  }

  componentDidUnload() {
    this.foundation.destroy();
  }

  render() {
    const toolbarClasses: CssClassMap = {
      'mdc-toolbar': true,
      'mdc-toolbar--fixed': this.fixed || this.waterfall || this.fixedLastrow,
      'mdc-toolbar--waterfall': this.waterfall,
      'mdc-toolbar--fixed-lastrow-only': this.fixedLastrow,
      'mdc-toolbar--flexible': this.flexible,
      'mdc-toolbar--flexible-default-behavior':this.flexible && this.flexibleDefault
    };

    return (
      <header class={toolbarClasses}>
        <div class="mdc-toolbar__row">
        <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
              <slot name="left"/>
          </section>
          <section class="mdc-toolbar__section">
              <slot name="center"/>
          </section>
          <section class="mdc-toolbar__section mdc-toolbar__section--align-end">
              <slot name="right"/>
          </section>
        </div>
      </header>
    );
  }
}
