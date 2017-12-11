import { Component, Prop , Element} from '@stencil/core';
import { MDCRipple } from '@material/ripple'

@Component({
  tag: 'o-mdc-button',
  styleUrl: 'o-mdc-button.scss',
  shadow: true
})
export class MdcButtonComponent {

  private ripple : any;

  @Element() MdcButtonEl: HTMLElement;
  @Prop() href: string;
  @Prop() disabled: boolean;
  @Prop() raised: boolean;
  @Prop() unelevated: boolean;
  @Prop() stroked: boolean;
  @Prop() dense: boolean;
  @Prop() compact: boolean;

  componentDidLoad() {
    this.ripple = MDCRipple.attachTo(this.MdcButtonEl.shadowRoot.querySelector('.mdc-button'));
  }

  componentDidUnload() {
    this.ripple.destroy();
  }

  render() {
    const TagType = this.href ? 'a' : 'button';
    return (
      <TagType class="mdc-button mdc-button--raised">
       <slot/>
      </TagType>
    );
  }
}
