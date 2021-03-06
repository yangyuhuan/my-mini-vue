import { PublicInstanceProxyHandles } from "./componentPublicInstance";

export function createComponentInstance(vnode) {
  const component = {
    vnode,
    type: vnode.type,
    setupState: {},
  };
  return component;
}

export function setupComponent(instance) {
  //TODO
  //initProps()
  //initSlots()
  setupStatefulComponent(instance);
}

function setupStatefulComponent(instance: any) {
  const Component = instance.type;
  instance.proxy = new Proxy({ _: instance }, PublicInstanceProxyHandles);

  const { setup } = Component;
  if (setup) {
    //function object
    const setupResult = setup();
    handleSetupResult(instance, setupResult);
  }
}

function handleSetupResult(instance, setupResult: any) {
  //function Object
  //TODO function
  if (typeof setupResult === "object") {
    instance.setupState = setupResult;
  }
  finishComponentSetup(instance);
}
function finishComponentSetup(instance: any) {
  const Component = instance.type;
  instance.render = Component.render;
}
