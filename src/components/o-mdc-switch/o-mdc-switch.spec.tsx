import { flush, render } from '@stencil/core/testing';
import { MdcSwitchComponent } from './o-mdc-switch';

describe('o-mdc-button', () => {
  it('should build', () => {
    expect(new MdcSwitchComponent()).toBeTruthy();
  });
});
