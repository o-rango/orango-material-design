import { flush, render } from '@stencil/core/testing';
import { MdcToolbarSectionComponent } from './o-mdc-toolbar-section';

describe('o-mdc-toolbar-title', () => {
  it('should build', () => {
    expect(new MdcToolbarSectionComponent()).toBeTruthy();
  });

});
