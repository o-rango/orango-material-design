import { Component, Prop, CssClassMap } from '@stencil/core';

@Component({
  tag: 'o-mdc-list-item',
  styleUrl: 'o-mdc-list.scss',
  shadow: true
})
export class MdcListItemComponent {
  render() {
    return (
      <li class="mdc-list-item">
        <slot/>
      </li>
    );
  }
}
