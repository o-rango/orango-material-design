import {
  Component,
  Prop,
  Element,
  CssClassMap,
  Method,
  Listen
} from '@stencil/core';
import { MDCSnackbar } from '@material/snackbar';

@Component({
  tag: 'o-mdc-snackbar',
  styleUrl: 'o-mdc-snackbar.scss',
  shadow: true
})
export class MdcSnackbarComponent {
  private mdcSnackbar: any;
  @Element() el: HTMLElement;
  @Prop() alignStart: boolean; // Default time snackbar is shown
  @Prop() actionOnBottom: boolean;
  @Prop() dismissesOnAction: boolean = true;

  @Method()
  show(payload) {
    this.mdcSnackbar.show(payload);
  }

  @Method()
  close(payload) {
    this.mdcSnackbar.destroy();
  }

  componentDidLoad() {
    const rootEl = this.el.shadowRoot.querySelector('.mdc-snackbar');
    this.mdcSnackbar = new MDCSnackbar(rootEl);
    this.mdcSnackbar.dismissesOnAction = this.dismissesOnAction;
  }

  componentDidUnload() {
    this.mdcSnackbar.destroy();
  }

  render() {
    const snackbarClasses: CssClassMap = {
      'mdc-snackbar': true,
      'mdc-snackbar--align-start': this.alignStart
    };

    return (
      <div
        class={snackbarClasses}
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden="true"
      >
        <div class="mdc-snackbar__text">t</div>
        <div class="mdc-snackbar__action-wrapper">
          <button type="button" class="mdc-snackbar__action-button">
            t
          </button>
        </div>
      </div>
    );
  }
}
