import { MDCRippleFoundation, util } from '@material/ripple';
export class RippleAdapter extends MDCRippleFoundation {

  constructor(el, options) {
  super(
    Object.assign(
    {
      browserSupportsCssVars: () =>
      typeof window !== 'undefined'
        ? util.supportsCssVariables(window)
        : false,

      registerResizeHandler: handler => {
      return window.addEventListener('resize', handler);
      },

      deregisterResizeHandler: handler => {
      return window.removeEventListener('resize', handler);
      },
      getWindowPageOffset: () => {
      return {
        x: typeof window !== 'undefined' ? window.pageXOffset : 0,
        y: typeof window !== 'undefined' ? window.pageYOffset : 0
      };
      },
      isUnbounded: () => {
      return false;
      },
      computeBoundingRect: () => {
      return el.getBoundingClientRect();
      },
      isSurfaceActive: () => {
      return el[util.getMatchesProperty(HTMLElement.prototype)](':active');
      },
      isSurfaceDisabled: () => {
      return el.disabled;
      },
      addClass(className:string) {
      el.classList.add(className);
      },
      // assumes a data 'classes' property on the root element
      removeClass(className:string) {
      el.classList.remove(className);
      },
      registerInteractionHandler: (evt:string, handler : EventListener) => {
      el.addEventListener(evt, handler);
      },
      deregisterInteractionHandler: (evt:string, handler: EventListener) => {
      el.removeEventListener(evt, handler);
      },
      updateCssVariable: (varName: string, value: string) => {
      el.style.setProperty(varName, value);
      }
    },
    options
    )
  );
  }
}
