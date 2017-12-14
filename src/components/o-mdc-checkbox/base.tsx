import { MDCRippleFoundation, util } from '@material/ripple';
export class RippleBase extends MDCRippleFoundation {

  constructor(vm,childEl, options) {
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
      return vm.getBoundingClientRect();
      },
      isSurfaceActive: () => {
      return vm[util.getMatchesProperty(HTMLElement.prototype)](':active');
      },
      isSurfaceDisabled: () => {
      return vm.disabled;
      },
      addClass(className) {
      vm.classList.add(className);
      },
      // assumes a data 'classes' property on the root element
      removeClass(className) {
      vm.classList.remove(className);
      },
      registerInteractionHandler: (evt, handler) => {
      vm.addEventListener(evt, handler);
      },
      deregisterInteractionHandler: (evt, handler) => {
      vm.removeEventListener(evt, handler);
      },
      updateCssVariable: (varName: string, value: string) => {
      console.log(vm.style);
      vm.style.setProperty(varName, value);
      }
    },
    options
    )
  );
  }
}
