import { flush, render } from '@stencil/core/testing';
import { MdcSelectComponent } from './o-mdc-select';

describe('o-mdc-select', () => {
  it('should build', () => {
    expect(new MdcSelectComponent()).toBeTruthy();
  });

});
