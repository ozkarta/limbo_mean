import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

// ============ Equal validator - check if values of 2 fields are the same
export function equalValidator(validateEqual: string, isReverse: boolean): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    // self value
    let selfValue = control.value;

    // control vlaue
    let controlValue = control.root.get(validateEqual);

    // value not equal
    if (controlValue && selfValue !== controlValue.value && !isReverse) {
      return {
        validateEqual: false
      }
    }

    // value equal and reverse
    if (controlValue && selfValue === controlValue.value && isReverse) {
      delete controlValue.errors['validateEqual'];
      if (!Object.keys(controlValue.errors).length) controlValue.setErrors(null);
    }

    // value not equal and reverse
    if (controlValue && selfValue !== controlValue.value && isReverse) {
      controlValue.setErrors({
        validateEqual: false
      })
    }

    return null;
  };
}

@Directive({
  selector: '[validateEqual]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: EqualValidatorDirective, multi: true }
  ]
})
export class EqualValidatorDirective implements Validator, OnChanges {
  @Input() validateEqual: string;
  @Input() reverse: string;
  private valFn = Validators.nullValidator;

  private isReverse() {
    if (!this.reverse) return false;
    return this.reverse === 'true' ? true: false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes['validateEqual'];
    if (change) {
      this.valFn = equalValidator(this.validateEqual, this.isReverse());
    } else {
      this.valFn = Validators.nullValidator;
    }
  }

  validate(control: AbstractControl): { [key: string]: any } {
    return this.valFn(control);
  }
}
