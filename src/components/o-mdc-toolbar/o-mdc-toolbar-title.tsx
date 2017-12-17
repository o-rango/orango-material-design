import { Component } from '@stencil/core';

@Component({
  tag: 'o-mdc-toolbar-title',
  shadow: false
})
export class MdcToolbarTitleComponent {
  render() {
    return (
      <a class="mdc-toolbar-title mdc-toolbar__title">
        <slot />
      </a>
    );
  }
}
