import {BrowserStorage, DataStorage, TauriStorage} from "../utils/storage.ts";
import {isTauri} from "@tauri-apps/api/core";

let storage: DataStorage;

export function useStorage() {
  if (!storage) storage = isTauri() ? new TauriStorage() : new BrowserStorage();

  return storage;
}