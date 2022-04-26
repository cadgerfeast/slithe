export function getRootElement (el: HTMLElement) {
  if (el.parentNode instanceof ShadowRoot) {
    return el.parentNode.host;
  }
  return null;
};

export function styleToString (style: Record<string, string>) {
  let str = '';
  for (const key in style) {
    str += `${key}: ${style[key]};`;
  }
  return str;
}

export function observeRect (el: HTMLElement) {
  // TODO observe with: https://stackoverflow.com/questions/40251082/an-event-or-observer-for-changes-to-getboundingclientrect
}
