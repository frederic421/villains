import { browser, element, by } from 'protractor';

export class VilainsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('vil-root h1')).getText();
  }
}
