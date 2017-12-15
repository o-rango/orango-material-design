import { flush, render } from '@stencil/core/testing';
import { MdcLinearProgressComponent } from './o-mdc-linear-progress';

describe('o-mdc-linear-progress', () => {
  it('should build', () => {
    expect(new MdcLinearProgressComponent()).toBeTruthy();
  });
});
