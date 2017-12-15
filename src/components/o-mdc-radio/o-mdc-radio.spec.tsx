import { flush, render } from '@stencil/core/testing';
import { MdcRadioComponent } from './o-mdc-radio';

describe('o-mdc-radio', () => {
  it('should build', () => {
    expect(new MdcRadioComponent()).toBeTruthy();
  });

});
