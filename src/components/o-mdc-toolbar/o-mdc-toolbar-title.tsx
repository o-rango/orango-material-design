import {Component} from '@stencil/core';

@Component({
  tag: 'o-mdc-toolbar-title',
  styleUrl: 'o-mdc-toolbar.scss',
  shadow: true
})
export class MdcToolbarTitleComponent {
  render() {
    return (
      <a class="mdc-toolbar-title mdc-toolbar__title">
      <slot/>
      </a>
    );
  }
}
