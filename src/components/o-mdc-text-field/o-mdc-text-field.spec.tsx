import { flush, render } from '@stencil/core/testing';
import { MdcTextFieldComponent } from './o-mdc-text-field';

describe('o-mdc-text-field', () => {
  it('should build', () => {
    expect(new MdcTextFieldComponent()).toBeTruthy();
  });

});
