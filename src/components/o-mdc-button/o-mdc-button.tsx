import {Component, Prop, Element, CssClassMap} from '@stencil/core';
import {MDCRipple} from '@material/ripple'

@Component({
  tag: 'o-mdc-button',
  styleUrl: 'o-mdc-button.scss',
  shadow: true
})
export class MdcButtonComponent {

  private ripple : any;

  @Element()el : HTMLElement;
  @Prop()name : string;
  @Prop()id : string;
  @Prop()href : string;
  @Prop()disabled : boolean;
  @Prop()raised : boolean;
  @Prop()unelevated : boolean;
  @Prop()stroked : boolean;
  @Prop()dense : boolean;
  @Prop()compact : boolean;

  componentDidLoad() {
    const rootEl = this.el.shadowRoot.querySelector('.mdc-button');
    this.ripple = new MDCRipple(rootEl);
  }

  componentDidUnload() {
    this.ripple.destroy();
  }

  render() {

    const buttonClasses : CssClassMap = {
      'mdc-button' : true,
      'mdc-button--raised': this.raised,
      'mdc-button--unelevated': this.unelevated,
      'mdc-button--stroked': this.stroked,
      'mdc-button--dense': this.dense,
      'mdc-button--compact': this.compact
    }

    const TagType = this.href ? 'a' : 'button';
    return (
      <TagType class={buttonClasses} disabled={this.disabled} href={this.href} name={this.name} id={this.id}>
        <slot/>
      </TagType>
    );
  }
}
