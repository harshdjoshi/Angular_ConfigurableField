import { Component, Input } from '@angular/core';
import { FormGroup,FormBuilder,Validators, FormControl} from '@angular/forms';
import { InputFieldBase} from "../models/input-field-base";
import { GenericFormInputService}  from "../services/generic-form-input.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  @Input() inputFields: InputFieldBase<any>[]=[];
  userInputs: FormGroup;
  dataService: GenericFormInputService;
  isValid: boolean;
  isInputColumnValid: boolean;
  constructor(service: GenericFormInputService, private formBuilder: FormBuilder) {
    this.dataService = service;
    this.userInputs = this.createFormGroup(formBuilder);
    this.isValid = true;
    this.isInputColumnValid = true;
  }
  onSubmit() {
    var key = this.userInputs.controls['key'].value;
    this.inputFields = this.dataService.getInputFields(key);
    var inputLength = key.split(/(?=[\s\S])/u);
    this.isValid = inputLength.length === 0 || inputLength.length === this.inputFields.length;
  }
  createFormGroup(formBuilder: FormBuilder) {
    return formBuilder.group({
      key: ['', [Validators.required]],
      columns: [1, [Validators.required, Validators.pattern(/^([12346]|1[2])$/)]]
    });
  }
}
