import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import {ThemableMixin} from "@vaadin/vaadin-themable-mixin";

export class <%= className %> extends ThemableMixin(LitElement) {
  static get is() {
    return '<%= tagName %>';
  }

  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
