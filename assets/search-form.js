class SearchForm extends HTMLElement {
  constructor() {
    super();
    this.input = this.querySelector('input[type="search"]');
    this.resetButton = this.querySelector('button[type="reset"]');

    if (this.input) {
      this.input.form.addEventListener('reset', this.onFormReset.bind(this));
      // Immediate listener for button state update (no debounce)
      this.input.addEventListener('input', this.updateSearchButtonState.bind(this));
      // Debounced listener for other functionality
      this.input.addEventListener(
        'input',
        debounce((event) => {
          this.onChange(event);
        }, 300).bind(this)
      );
      // Initialize button state on page load
      this.updateSearchButtonState();
    }
  }

  toggleResetButton() {
    if (!this.resetButton) return;
    const resetIsHidden = this.resetButton.classList.contains('hidden');
    if (this.input.value.length > 0 && resetIsHidden) {
      this.resetButton.classList.remove('hidden');
    } else if (this.input.value.length === 0 && !resetIsHidden) {
      this.resetButton.classList.add('hidden');
    }
  }

  onChange() {
    this.toggleResetButton();
    this.updateSearchButtonState();
  }

  updateSearchButtonState() {
    const searchField = this.querySelector('.search-field');
    if (!searchField) return;
    if (this.input.value.trim().length > 0) {
      searchField.classList.add('has-text');
    } else {
      searchField.classList.remove('has-text');
    }
  }

  shouldResetForm() {
    return !document.querySelector('[aria-selected="true"] a');
  }

  onFormReset(event) {
    // Prevent default so the form reset doesn't set the value gotten from the url on page load
    event.preventDefault();
    // Don't reset if the user has selected an element on the predictive search dropdown
    if (this.shouldResetForm()) {
      this.input.value = '';
      this.input.focus();
      this.toggleResetButton();
      this.updateSearchButtonState();
    }
  }
}

customElements.define('search-form', SearchForm);
