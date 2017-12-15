import { flush, render } from '@stencil/core/testing';
import { MdcSnackbarComponent } from './o-mdc-snackbar';

describe('o-mdc-snackbar', () => {
  it('should build', () => {
    expect(new MdcSnackbarComponent()).toBeTruthy();
  });

});
