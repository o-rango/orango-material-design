import {Component, Prop , CssClassMap} from '@stencil/core';

@Component({
  tag: 'o-mdc-toolbar-section',
  styleUrl: 'o-mdc-toolbar.scss',
  shadow: true
})
export class MdcToolbarSectionComponent {

  @Prop() alignStart : boolean;
  @Prop()alignEnd : boolean;
  @Prop()shrinkToFit : boolean;

  render() {
    const alignClasses : CssClassMap = {
      'mdc-toolbar__section' : true,
      'mdc-toolbar__section--align-start': this.alignStart,
      'mdc-toolbar__section--align-end': this.alignEnd,
      'mdc-toolbar__section--shrink-to-fit': this.shrinkToFit
    }

    return (
      <section class={alignClasses}>
         <slot/>
      </section>
    );
  }
}
