import { createVNode } from "./vnode";
export function h(type, prop?, children?) {
  return createVNode(type, prop, children);
}
