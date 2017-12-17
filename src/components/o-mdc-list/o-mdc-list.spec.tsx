import { flush, render } from '@stencil/core/testing';
import { MdcListComponent } from './o-mdc-list';

describe('o-mdc-Menu', () => {
  it('should build', () => {
    expect(new MdcListComponent()).toBeTruthy();
  });

});
