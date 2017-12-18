import { Component, Prop, Element, CssClassMap } from '@stencil/core';
import { MDCSelect , MDCSelectFoundation } from '@material/select';

@Component({
  tag: 'o-mdc-select',
  styleUrl: 'o-mdc-select.scss',
  shadow: true
})
export class MdcSelectComponent {
  private mdcSelect: any;

  @Element() el: HTMLElement;
  @Prop() tabIndex: number;
  @Prop() selectedTextContent : any;

  componentDidLoad() {
    const rootEl = this.el.shadowRoot.querySelector('.mdc-select');
    this.mdcSelect = new MDCSelect(rootEl);
  }

  componentDidUnload() {
    this.mdcSelect.destroy();
  }
  render() {
    return (
      <div class="mdc-select" role="listbox" tabindex="0">
        <div class="mdc-select__surface">
          <div class="mdc-select__label">Pick a Food Group</div>
          <div class="mdc-select__selected-text" />
          <div class="mdc-select__bottom-line" />
        </div>
        <div class="mdc-simple-menu mdc-select__menu">
          <ul class="mdc-list mdc-simple-menu__items">
            <li class="mdc-list-item" role="option" tabindex="0">
              Bread, Cereal, Rice, and Pasta
            </li>
            <li class="mdc-list-item" role="option" tabindex="0">
              Vegetables
            </li>
            <li class="mdc-list-item" role="option" tabindex="0">
              Fruit
            </li>
            <li class="mdc-list-item" role="option" tabindex="0">
              Milk, Yogurt, and Cheese
            </li>
            <li class="mdc-list-item" role="option" tabindex="0">
              Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts
            </li>
            <li class="mdc-list-item" role="option" tabindex="0">
              Fats, Oils, and Sweets
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
