import { flush, render } from '@stencil/core/testing';
import { MdcToolbarComponent } from './o-mdc-toolbar';

describe('o-mdc-toolbar', () => {
  it('should build', () => {
    expect(new MdcToolbarComponent()).toBeTruthy();
  });

});
