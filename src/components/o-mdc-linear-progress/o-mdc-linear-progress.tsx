import { Component, Element, CssClassMap, Prop } from '@stencil/core';
import { MDCLinearProgressFoundation } from '@material/linear-progress';

@Component({
  tag: 'o-mdc-linear-progress',
  styleUrl: 'o-mdc-linear-progress.scss',
  shadow: true
})
export class MdcLinearProgressComponent {
  private progressBar: any;

  @Element() el: HTMLElement;
  @Prop() id: string;
  @Prop() open: boolean = true; //default true
  @Prop() accent: boolean;
  @Prop() indeterminate: boolean;
  @Prop() reverse: boolean;
  @Prop() progress: number;
  @Prop() buffer: number;

  componentDidLoad() {
    const rootEl = this.el.shadowRoot.querySelector('.mdc-linear-progress');
    this.progressBar = new MDCLinearProgressFoundation({
      addClass: (className: string) => {
        rootEl.classList.add(className);
      },
      removeClass: (className: string) => {
        rootEl.classList.remove(className);
      },
      hasClass: (className: string) => {
        rootEl.classList.contains(className);
      },
      getPrimaryBar: () => {
        return rootEl.querySelector('.mdc-linear-progress__primary-bar');
      },
      getBuffer: () => {
        return rootEl.querySelector('.mdc-linear-progress__buffer');
      },
      setStyle: (el, styleProperty, value) => {
        el.setAttribute('style', (styleProperty = value));
      }
    });

    this.progressBar.init();
    this.progressBar.setReverse(this.reverse);
    this.progressBar.setProgress(this.progress);
    this.progressBar.setBuffer(this.buffer);
    this.progressBar.setDeterminate(!this.indeterminate);

    this.progressBar.open();
  }

  componentDidUnload() {
    this.progressBar.destroy();
  }
  render() {
    const progressClasses: CssClassMap = {
      'mdc-linear-progress': true,
      'mdc-button--raised': this.accent
    };

    return (
      <div role="progressbar" class={progressClasses}>
        <div class="mdc-linear-progress__buffering-dots" />
        <div class="mdc-linear-progress__buffer" />
        <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
          <span class="mdc-linear-progress__bar-inner" />
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span class="mdc-linear-progress__bar-inner" />
        </div>
      </div>
    );
  }
}
