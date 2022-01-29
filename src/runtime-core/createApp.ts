import { createVNode } from "./vnode";
import { render } from "./renderer";

export function createApp(rootComponent) {
  return {
    mount(rootContainer) {
      //先vnode
      //component -> vnode
      //所有的逻辑操作，都会基于vnode做处理

      const vnode = createVNode(rootComponent);
      render(vnode, rootContainer);
    },
  };
}
