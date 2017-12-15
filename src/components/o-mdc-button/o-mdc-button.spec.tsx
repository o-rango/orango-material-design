import { flush, render } from '@stencil/core/testing';
import { MdcButtonComponent } from './o-mdc-button';

describe('o-mdc-button', () => {
  it('should build', () => {
    expect(new MdcButtonComponent()).toBeTruthy();
  });

});
