import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { <%= className %> } from '../src/<%= className %>.js';
import '../src/<%= tagName %>.js';

describe('<%= className %>', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<<%= className %>>(html`<<%= tagName %>></<%= tagName %>>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<<%= className %>>(html`<<%= tagName %>></<%= tagName %>>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<<%= className %>>(html`<<%= tagName %> title="attribute title"></<%= tagName %>>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<<%= className %>>(html`<<%= tagName %>></<%= tagName %>>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
