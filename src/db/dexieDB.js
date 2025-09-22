// src/db/dexieDB.js
import Dexie from "dexie";

export const db = new Dexie("SehatSathiCHWDB");

db.version(1).stores({
  patients: "id, name, phone, createdAt, updatedAt",
  encounters: "id, patientId, ts, synced, createdAt",
  media: "id, encounterId, type, name, url, createdAt",
  queue: "++idx, type, payload, createdAt, tries"
});

/**
 * queue example: { type: 'encounter_create', payload: {...}, createdAt: Date.now(), tries: 0 }
 */

export async function enqueue(type, payload) {
  return db.queue.add({
    type,
    payload,
    createdAt: Date.now(),
    tries: 0
  });
}

export default db;
