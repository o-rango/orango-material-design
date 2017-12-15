import { flush, render } from '@stencil/core/testing';
import { MdcFormFieldComponent } from './o-mdc-form-field';

describe('o-mdc-form-field', () => {
  it('should build', () => {
    expect(new MdcFormFieldComponent()).toBeTruthy();
  });

});
