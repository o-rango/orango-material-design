import {Component, Prop, CssClassMap, Element} from '@stencil/core';
import {MDCFormField, MDCFormFieldFoundation} from '@material/form-field';
@Component({tag: 'o-mdc-form-field', styleUrl: 'o-mdc-form-field.scss', shadow: true})

export class MdcFormFieldComponent {

  private mdcFormField : any;

  @Element()el : HTMLElement;
  @Prop()alignEnd : boolean;

  componentDidLoad() {
    const rootEl = this.el.shadowRoot.querySelector('.mdc-form-field');
    this.mdcFormField = new MDCFormField(rootEl);
  }

  componentDidUnload() {
    this
      .mdcFormField
      .destroy();
  }
  render() {

    const formFieldClasses : CssClassMap = {
      'mdc-form-field': true,
      'mdc-form-field--align-end': true
    }

    return (
      <div class={formFieldClasses}><slot/>
      <label>RECREIDO</label></div>);
  }
}
