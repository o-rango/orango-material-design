import { Component, Element, Prop} from '@stencil/core';

@Component({
  tag: 'o-mdc-button',
  styleUrl: 'o-mdc-button.scss',
  shadow: true
})
export class MdcButtonComponent {

  @Prop() href: string;
  @Prop() disabled: boolean;
  @Prop() raised: boolean;
  @Prop() unelevated: boolean;
  @Prop() stroked: boolean;
  @Prop() dense: boolean;
  @Prop() compact: boolean;

  render() {
    const TagType = this.href ? 'a' : 'button';
    return (
      <TagType class="mdc-button">
       <slot/>
      </TagType>
    );
  }
}
