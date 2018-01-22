import { Component, Prop, Element, CssClassMap } from '@stencil/core';
import { MDCRipple } from '@material/ripple';

@Component({
  tag: 'o-mdc-switch',
  styleUrl: 'o-mdc-switch.scss',
  shadow: true
})
export class MdcSwitchComponent {

  @Element() el: HTMLElement;
  @Prop() name: string;
  @Prop() id: string;
  @Prop() value: string;
  @Prop() label: string;
  @Prop() checked: boolean;
  @Prop() disabled: boolean;
  @Prop() alignEnd: boolean;


  componentDidLoad() {
  }

  componentDidUnload() {
  }

  render() {
    return (
      <div class="mdc-switch">
        <input type="checkbox" id="basic-switch" class="mdc-switch__native-control" />
        <div class="mdc-switch__background">
          <div class="mdc-switch__knob"/>
        </div>
     </div>
    );
  }
}
