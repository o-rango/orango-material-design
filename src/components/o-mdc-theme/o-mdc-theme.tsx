import {Component, Prop, Element, CssClassMap} from '@stencil/core';

@Component({
  tag: 'o-mdc-theme',
  styleUrl: 'o-mdc-theme.scss',
  shadow: true
})

export class MdcThemeComponent {
   render() {
    return (<slot/>);
  }
}
