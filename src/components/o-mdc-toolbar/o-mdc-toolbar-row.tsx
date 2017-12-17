import {Component} from '@stencil/core';

@Component({
  tag: 'o-mdc-toolbar-row',
  shadow: false
})
export class MdcToolbarRowComponent {
  render() {
    return (
      <div class="mdc-toolbar__row">
      <slot/>
      </div>
    );
  }
}
