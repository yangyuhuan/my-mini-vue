import {
  mutableHandles,
  readonlyHandles,
  shallowReadonlyHandles,
} from "./baseHandlers";

export const enum ReactiveFlags {
  IS_REACTIVE = "_V_isReactive",
  IS_READONLY = "_V_isReadonly",
}

export const enum ReadonlyFlags {}

export function reactive(raw) {
  return createActiveObject(raw, mutableHandles);
}

export function readonly(raw) {
  return createActiveObject(raw, readonlyHandles);
}

export function shallowReadonly(raw) {
  return createActiveObject(raw, shallowReadonlyHandles);
}

export function isReactive(value) {
  return !!value[ReactiveFlags.IS_REACTIVE];
}

export function isReadonly(value) {
  return !!value[ReactiveFlags.IS_READONLY];
}

export function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}

function createActiveObject(target: any, baseHandlers) {
  return new Proxy(target, baseHandlers);
}
