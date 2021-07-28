import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import IS_BROWSER from 'global-utils/utils/is-browser';
import { Promise, resolve as rsvpResolve } from 'rsvp';

/**
 * Render dynamic component to inject into given HTML element with {{#in-element}}
 * @extends Glimmer.Component
 *
 * @param {String} selector - HTML selector where the component will be injected into
 *
 * Ex:
 *   <DynamicComponent
 *     @selector={{this.seclector}}
 *   />
 *      <...>
 *   </DynamicComponent>
 */

export default class DynamicComponent extends Component {
  constructor() {
    super(...arguments);
    assert('Must pass valid selector string', !!this.args.selector);
  }

  get elementData() {
    return this._getElementData();
  }

  /**
   * @property {Promise<HTMLElement>} - asyncElementData promise object return HTML element
   */
  _getElementData() {
    if (IS_BROWSER) {
      const elem = document.querySelector(this.args.selector);
      return elem === null
        ? this._rafAsync().then(() => this._getElementData())
        : rsvpResolve(elem);
    }
    return rsvpResolve(null);
  }

  _rafAsync() {
    return new Promise((resolve) => {
      if (IS_BROWSER) {
        return window.requestAnimationFrame(resolve);
      }
      return null;
    });
  }
}
