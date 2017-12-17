import { Component, Prop, Element, CssClassMap } from '@stencil/core';

@Component({
  tag: 'o-mdc-menu',
  styleUrl: 'o-mdc-menu.scss',
  shadow: true
})
export class MdcMenuComponent {
  render() {
    return (
      <div class="mdc-select" role="listbox" tabindex="0" />
    );
  }
}
