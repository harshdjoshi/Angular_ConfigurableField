import { InputFieldBase } from "./input-field-base";

export class InputFieldCheckbox extends InputFieldBase<string> {
  controlType = 'checkbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || 'checkbox';
  }
}
