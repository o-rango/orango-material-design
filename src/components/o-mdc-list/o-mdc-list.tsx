import { Component, Prop, CssClassMap } from '@stencil/core';

@Component({
  tag: 'o-mdc-list',
  styleUrl: 'o-mdc-list.scss',
  shadow: true
})
export class MdcListComponent {

  @Prop()id : string;
  @Prop()dense : boolean;
  @Prop()avatarList : boolean;
  @Prop()twoLine : boolean;
  @Prop()bordered : boolean;

  render() {
    const listClasses: CssClassMap = {
      'mdc-list': true,
      'mdc-list--dense': this.dense,
      'mdc-list--avatar-list': this.avatarList,
      'mdc-list--two-line': this.twoLine,
      'mdc-list--bordered': this.bordered
    };

    return (
      <ul class={listClasses} id={this.id}>
        <slot/>
      </ul>
    );
  }
}
