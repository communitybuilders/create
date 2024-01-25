import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { styles } from '../<%= tagName %>.css';
import { CbarThemeableMixin } from "@cbar/cbar-themeable-mixin";
import litLogo from './assets/lit.svg'
import viteLogo from '/vite.svg'

@customElement('<%= tagName %>')
export class <%= className %> extends CbarThemeableMixin(LitElement) {
  static override styles = [styles];

  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more'

  @property({ type: Number })
  count = 0

  render() {
    return html`
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src=${viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://lit.dev" target="_blank">
          <img src=${litLogo} class="logo lit" alt="Lit logo" />
        </a>
      </div>
      <slot></slot>
      <div class="card">
        <button @click=${this._onClick} part="button">
          count is ${this.count}
        </button>
      </div>
      <p class="read-the-docs">${this.docsHint}</p>
    `
  }

  private _onClick() {
    this.count++
  }
}

declare global {
  interface HTMLElementTagNameMap {
    '<%= tagName %>': <%= className %>
  }
}
