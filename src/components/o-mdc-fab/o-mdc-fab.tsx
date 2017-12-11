import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'o-mdc-fab',
  styleUrl: 'o-mdc-fab.scss',
  shadow: true
})
export class MdcFabComponent {

  render() {
    return (
      <button class="mdc-fab" aria-label="">
          <slot/>
      </button>
    );
  }
}
