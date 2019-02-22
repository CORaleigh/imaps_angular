import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher, MatDialogRef } from '@angular/material';
import { EmailService } from '../email.service';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-feedback-dialog',
  templateUrl: './feedback-dialog.component.html',
  styleUrls: ['./feedback-dialog.component.css']
})
export class FeedbackDialogComponent implements OnInit {

  constructor(private email:EmailService, public dialogRef: MatDialogRef<FeedbackDialogComponent>) { }


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  feedbackFormControl = new FormControl('', [
    Validators.required
  ]);
  matcher = new MyErrorStateMatcher();  
  ngOnInit() {
  
  }

  submitFeedback() {

    this.email.sendEmail(this.feedbackFormControl.value, this.emailFormControl.value).subscribe(event => {
      this.dialogRef.close();

    });

  }

}
