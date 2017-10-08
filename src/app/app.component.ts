import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';

import { ModelsService } from './models.service';
import { Model } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  models: Model[];
  selectedModel: Model;
  isDarkTheme = false;

  constructor(private modelsService: ModelsService,
              private vcr: ViewContainerRef,
              private mdDialog: MdDialog) {}

  ngOnInit() {
    this.models = this.modelsService.getAll();
  }

  showDetails(model: Model) {
    this.selectedModel = model;
  }

  addMessage() {
    // Open dialog to add message
    // 1. create dialog config
    const dialogConfig = new MdDialogConfig();
    dialogConfig.viewContainerRef = this.vcr;
    // 2. open dialog
    const dialog = this.mdDialog.open(AddMessageComponent, dialogConfig);
    // 3. pass selected model to dialog
    (<any>dialog.componentInstance).selectedModel = this.selectedModel;
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

}

@Component({
  selector: 'app-add-message',
  template: `
  <form (submit)="addMessage()">
    <md-input-container>
      <input mdInput name="message" [(ngModel)]="message" placeholder="Message">
    </md-input-container>
    <button md-raised-button color="accent">Add Message</button>
  </form>
  `
})
export class AddMessageComponent {

  message = '';

  constructor(private mdDialogRef: MdDialogRef<AddMessageComponent>) {}

  addMessage() {
    // 1. create message
    const newMessage = { who: 'John Doe', content: this.message };
    // 2. add message to selected model
    const selectedModel: Model = (<any>this.mdDialogRef.componentInstance).selectedModel;
    selectedModel.messages.push(newMessage);
    // 3. close dialog
    this.mdDialogRef.close();
  }

}
