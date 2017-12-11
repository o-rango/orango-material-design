import { flush, render } from '@stencil/core/testing';
import { MdcLinearProgressComponent } from './o-mdc-linear-progress';

describe('my-component', () => {
  it('should build', () => {
    expect(new MdcLinearProgressComponent()).toBeTruthy();
  });
});
