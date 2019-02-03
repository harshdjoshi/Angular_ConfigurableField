import { InputFieldBase } from "./input-field-base";

export class InputFieldRadio extends InputFieldBase<string> {
  controlType = 'radio';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || 'radio';
  }
}
