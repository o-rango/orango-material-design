import { flush, render } from '@stencil/core/testing';
import { MdcThemeComponent } from './o-mdc-theme';

describe('o-mdc-theme', () => {
  it('should build', () => {
    expect(new MdcThemeComponent()).toBeTruthy();
  });

});
