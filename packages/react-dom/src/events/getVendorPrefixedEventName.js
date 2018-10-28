/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {canUseDOM} from 'shared/ExecutionEnvironment';

/**
 * Event names that have already been detected and prefixed (if applicable).
 */
const prefixedEventNames = {
  animationend: 'animationend',
  animationiteration: 'animationiteration',
  animationstart: 'animationstart',
  transitionend: 'transitionend'
};

/**
 * Bootstrap if a DOM exists.
 */
if (canUseDOM) {
  if (!('AnimationEvent' in window) && ('WebKitAnimationEvent' in window)) {
    prefixedEventNames.animationend = 'webkitAnimationend';
    prefixedEventNames.animationiteration = 'webkitAnimationiteration';
    prefixedEventNames.animationstart = 'webkitAnimationstart';
  }

  if (!('TransitionEvent' in window) && ('WebKitTransitionEvent' in window)) {
    prefixedEventNames.transitionend = 'webkitTransitionend';
  }
}

/**
 * Attempts to determine the correct vendor prefixed event name.
 *
 * @param {string} eventName
 * @returns {string}
 */
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) {
    return prefixedEventNames[eventName];
  }

  return eventName;
}

export default getVendorPrefixedEventName;
