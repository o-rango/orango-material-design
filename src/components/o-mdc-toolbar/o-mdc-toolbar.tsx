import {Component , Prop , Element , CssClassMap} from '@stencil/core';
import {MDCToolbar, MDCToolbarFoundation} from '@material/toolbar';

@Component({
  tag: 'o-mdc-toolbar',
  styleUrl: 'o-mdc-toolbar.scss',
  shadow: true
})
export class MdcToolbarComponent {
    private foundation : any;

    @Element()MdcToolbarEl : HTMLElement;
    @Prop()name : string;
    @Prop()id : string;

    @Prop()fixed : boolean;
    @Prop()waterfall : boolean;
    @Prop()fixedLastrow : boolean;
    @Prop()flexible : boolean;
    @Prop()flexibleDefault : boolean;

    componentDidLoad() {
      this.foundation = MDCToolbar.attachTo(this.MdcToolbarEl.shadowRoot.querySelector('.mdc-toolbar'));

    }

    componentDidUnload() {
      this.foundation.destroy();
    }

  render() {
    const toolbarClasses : CssClassMap = {
      'mdc-toolbar': true,
      'mdc-toolbar--fixed': this.fixed || this.waterfall || this.fixedLastrow,
      'mdc-toolbar--waterfall': this.waterfall,
      'mdc-toolbar--fixed-lastrow-only': this.fixedLastrow,
      'mdc-toolbar--flexible': this.flexible,
      'mdc-toolbar--flexible-default-behavior': this.flexible && this.flexibleDefault
    }

    return (
      <div class={toolbarClasses}>
      <div class="mdc-toolbar__row">
        <slot/>
      </div>
     </div>
    );
  }
}
