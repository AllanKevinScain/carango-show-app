export function setLocalstorage(storageValueName: string, value: unknown) {
  const storageValue = JSON.stringify(value);
  window.localStorage.setItem(storageValueName, storageValue);
}

export function getLocalstorage(storageValueName: string) {
  return window.localStorage.getItem(storageValueName);
}

export function removeLocalstorage(storageValueName: string) {
  window.localStorage.remove(storageValueName);
}
