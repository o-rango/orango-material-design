import { flush, render } from '@stencil/core/testing';
import { MdcToolbarTitleComponent } from './o-mdc-toolbar-title';

describe('o-mdc-toolbar-title', () => {
  it('should build', () => {
    expect(new MdcToolbarTitleComponent()).toBeTruthy();
  });

});
