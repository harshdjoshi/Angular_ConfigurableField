import { Injectable } from '@angular/core';
import { InputFieldBase } from "../models/input-field-base";
import { InputFieldText, InputFieldPassword , InputFieldButton, InputFieldDate} from "../models/input-field-text";
import { InputFieldRadio } from "../models/input-field-radio";
import {InputFieldCheckbox} from "../models/input-field-checkbox";


@Injectable()
export class GenericFormInputService {

  constructor() {}
  getInputFields(data) {

    let inputFields: InputFieldBase<any>[] = [];
    var inputElements = data.toLowerCase().split(/(?=[\s\S])/u);
    for (let inputElement of inputElements) {
      switch (inputElement) {
      
      case 't':
          inputFields.push(new InputFieldText({ key: 'test', label: 'Text' }));
          break;
      
      case 'r':
          inputFields.push(new InputFieldRadio({ key: 'test', label: 'Radio' }));
          break;
      case 'c':
        inputFields.push(new InputFieldCheckbox({ key: 'test', label: 'Checkbox' }));
          break;
      case 'p':
          inputFields.push(new InputFieldPassword({ key: 'test', label: 'Password' }));
          break;
      case 'b':
        inputFields.push(new InputFieldButton({ key: 'test', label: 'Button' }));
          break;
      case 'd':
        inputFields.push(new InputFieldDate({ key: 'test', label: 'Date' }));
        break;
        default:
          break;
      }
    }
    return inputFields.sort((a, b) => a.order - b.order);
  }
}
