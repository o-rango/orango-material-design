/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */


import {
  MdcButtonComponent as OMdcButton
} from './components/o-mdc-button/o-mdc-button';

declare global {
  interface HTMLOMdcButtonElement extends OMdcButton, HTMLElement {
  }
  var HTMLOMdcButtonElement: {
    prototype: HTMLOMdcButtonElement;
    new (): HTMLOMdcButtonElement;
  };
  interface HTMLElementTagNameMap {
    "o-mdc-button": HTMLOMdcButtonElement;
  }
  interface ElementTagNameMap {
    "o-mdc-button": HTMLOMdcButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "o-mdc-button": JSXElements.OMdcButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface OMdcButtonAttributes extends HTMLAttributes {
      name?: string;
      id?: string;
      href?: string;
      disabled?: boolean;
      raised?: boolean;
      unelevated?: boolean;
      stroked?: boolean;
      dense?: boolean;
      compact?: boolean;
    }
  }
}

