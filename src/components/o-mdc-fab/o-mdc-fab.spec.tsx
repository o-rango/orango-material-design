import { flush, render } from '@stencil/core/testing';
import { MdcFabComponent } from './o-mdc-fab';

describe('o-mdc-fab', () => {
  it('should build', () => {
    expect(new MdcFabComponent()).toBeTruthy();
  });
});
