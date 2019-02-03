import { InputFieldBase } from "./input-field-base";

export class InputFieldText extends InputFieldBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
    
  }
}

export class InputFieldPassword extends InputFieldBase<string> {
  controlType = 'password';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || 'password';

  }
}
export class InputFieldButton extends InputFieldBase<string> {
  controlType = 'button';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || 'button';

  }
}
export class InputFieldDate extends InputFieldBase<string> {
  controlType = 'date';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || 'date';

  }
}
