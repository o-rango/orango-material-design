import { flush, render } from '@stencil/core/testing';
import { MdcMenuComponent } from './o-mdc-menu';

describe('o-mdc-Menu', () => {
  it('should build', () => {
    expect(new MdcMenuComponent()).toBeTruthy();
  });

});
