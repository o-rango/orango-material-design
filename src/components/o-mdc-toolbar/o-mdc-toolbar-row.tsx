import {Component} from '@stencil/core';

@Component({
  tag: 'o-mdc-toolbar-row',
  styleUrl: 'o-mdc-toolbar.scss',
  shadow: true
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
