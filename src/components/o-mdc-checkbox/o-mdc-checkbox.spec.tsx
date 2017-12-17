import { flush, render } from '@stencil/core/testing';
import { MdcCheckboxComponent } from './o-mdc-checkbox';

describe('o-mdc-checkbox', () => {
  it('should build', () => {
    expect(new MdcCheckboxComponent()).toBeTruthy();
  });
});
