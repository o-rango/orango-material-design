import {Component} from '@stencil/core';

@Component({
  tag: 'o-mdc-linear-progress',
  styleUrl: 'o-mdc-linear-progress.scss',
  shadow: true
})
export class MdcLinearProgressComponent {

  render() {
    return (
      <div role="progressbar" class="mdc-linear-progress">
       <div class="mdc-linear-progress__buffering-dots"></div>
      </div>
    );
  }
}
