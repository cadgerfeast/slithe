// Helpers
import { clone } from './object';
import { switchPosition } from './array';

export type TabModel = {
  id: string;
  name: string;
  viewSlot: string;
  active: boolean;
  placeholder?: boolean;
}
export type TabsModel = {
  id: string;
  type: 'tabs';
  items: TabModel[];
}
export type SplitterModel = {
  id: string;
  type: 'splitter';
  direction: 'horizontal'|'vertical';
  items: [Model, Model];
  blueSize: number;
}
export type Model = TabsModel|SplitterModel;
export function computeModel <T extends Model> (model: T): T {
  const res = JSON.parse(JSON.stringify(model)) as T;
  res.id = res.id || crypto.randomUUID();
  switch (res.type) {
    case 'tabs': {
      let hasActive = false;
      if (res.items.length > 0) {
        for (let i = 0; i < res.items.length; i++) {
          res.items[i].id = res.items[i].id || crypto.randomUUID();
          hasActive = hasActive || res.items[i].active;
        }
        if (!hasActive) {
          res.items[0].active = true;
        }
      }
      break;
    }
    case 'splitter': {
      res.blueSize = res.blueSize || 50;
      for (let i = 0; i < res.items.length; i++) {
        res.items[i] = computeModel(res.items[i]);
      }
      break;
    }
  }
  return res;
}
export function resizeSplitterInModel (model: Model, id: string, size: number): Model {
  const res = clone(model);
  switch (res.type) {
    case 'splitter': {
      if (id === res.id) {
        res.blueSize = size;
      }
      for (let i = 0; i < res.items.length; i++) {
        res.items[i] = resizeSplitterInModel(res.items[i], id, size);
      }
      break;
    }
  }
  return res;
}
export function setActiveTabInModel (model: Model, id: string): Model {
  const res = clone(model);
  switch (res.type) {
    case 'tabs': {
      if (res.items.find((item) => item.id === id)) {
        res.items = res.items.map((item) => ({
          ...item,
          active: item.id === id
        }));
      }
      break;
    }
    case 'splitter': {
      for (let i = 0; i < res.items.length; i++) {
        res.items[i] = setActiveTabInModel(res.items[i], id);
      }
      break;
    }
  }
  return res;
}
export function sortTabInModel (model: Model, id: string, from: number, to: number): Model {
  const res = clone(model);
  switch (res.type) {
    case 'tabs': {
      if (res.items.find((item) => item.id === id)) {
        res.items = switchPosition(res.items, from, to).map((item) => ({
          ...item,
          active: id === item.id
        }));
      }
      break;
    }
    case 'splitter': {
      for (let i = 0; i < res.items.length; i++) {
        res.items[i] = sortTabInModel(res.items[i], id, from, to);
      }
      break;
    }
  }
  return res;
}
export function moveTabInModel (model: Model, tab: TabModel, fromId: string, fromIndex: number, toId: string, toIndex: number): Model {
  const res = clone(model);
  switch (res.type) {
    case 'tabs': {
      if (res.id === fromId) {
        res.items.splice(fromIndex, 1);
        if (!res.items.some((newItem) => newItem.active) && res.items.length > 0) {
          res.items[0].active = true;
        }
      }
      if (res.id === toId) {
        const newItems = [...res.items];
        newItems.splice(toIndex, 0, tab);
        res.items = newItems.map((item) => ({
          ...item,
          active: item.id === tab.id
        }));
      }
      break;
    }
    case 'splitter': {
      for (let i = 0; i < res.items.length; i++) {
        res.items[i] = moveTabInModel(res.items[i], tab, fromId, fromIndex, toId, toIndex);
      }
      break;
    }
  }
  return res;
}
export function getChildModelIndexModel (model: Model, id: string) {
  if (model.id === id) {
    return model;
  }
  switch (model.type) {
    case 'tabs': {
      for (const child of model.items) {
        if (child.id === id) {
          return child;
        }
      }
      break;
    }
    case 'splitter': {
      for (const child of model.items) {
        const found = getChildModelIndexModel(child, id);
        if (found) {
          return found;
        }
      }
      break;
    }
  }
}
export function ensureValidModel (model: Model) {
  let res = clone(model);
  switch (res.type) {
    case 'splitter': {
      if (isEmptyModel(res.items[0])) {
        res = res.items[1];
      } else if (isEmptyModel(res.items[1])) {
        res = res.items[0];
      }
      break;
    }
  }
  return res;
}
export function isEmptyModel (model: Model): boolean {
  switch (model.type) {
    case 'tabs': {
      return model.items.length === 0;
    }
    case 'splitter': {
      return isEmptyModel(model.items[0]) && isEmptyModel(model.items[1]);
    }
  }
}