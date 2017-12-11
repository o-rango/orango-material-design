import {Component, Prop, Element, CssClassMap} from '@stencil/core';
import {MDCRipple} from '@material/ripple'

@Component({
  tag: 'o-mdc-fab',
  styleUrl: 'o-mdc-fab.scss',
  shadow: true
})

export class MdcFabComponent {
  private ripple : any;

  @Element()MdcFabEl : HTMLElement;
  @Prop()name : string;
  @Prop()id : string;
  @Prop()href : string;
  @Prop()mini : boolean;
  @Prop()absolute : boolean;
  @Prop()fixed : boolean;

  componentDidLoad() {
    this.ripple = MDCRipple.attachTo(this.MdcFabEl.shadowRoot.querySelector('.mdc-fab'));
  }

  componentDidUnload() {
    this.ripple.destroy();
  }
  render() {

    const fabClasses : CssClassMap = {
      'mdc-fab': true,
      'mdc-fab--mini': this.mini,
      'mdc-fab--absolute': this.absolute,
      'mdc-fab--fixed': this.fixed
    }

    const TagType = this.href ? 'a' : 'button';
    return (
      <TagType class={fabClasses} href={this.href} name={this.name} id={this.id}>
          <slot/>
      </TagType>
    );
  }
}
