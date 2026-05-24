/**
 * Firebase configuration – RFC Admin Dashboard
 *
 * This file initialises the Firebase app and exports a Firestore `db` instance.
 * Reads credentials from Vite environment variables (VITE_FIREBASE_*).
 *
 * ⚠️  Install firebase before using:
 *       pnpm add firebase          (from workspace root)
 *       – or –
 *       cd artifacts/admin && npm install firebase
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck  ← suppressed until `firebase` package is installed

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Log environment variables for debugging (only in development)
if (import.meta.env.DEV) {
  console.log("Firebase Config (DEV):", firebaseConfig);
}

try {
  // Check if Firebase app already exists (safe across HMR reloads)
  const firebaseApp = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

  // Initialize Firestore
  const db = getFirestore(firebaseApp);

  // Initialize Analytics if supported
  if (isSupported()) {
    getAnalytics(firebaseApp);
  }

  export { firebaseApp, db };
  export default firebaseApp;
} catch (error) {
  console.error("Failed to initialize Firebase:", error);
  // Still export to prevent app crash, but log the error
  export const firebaseApp = null;
  export const db = null;
  export default null;
}
export const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

/** Firestore database — use this for reading/writing RFC data */
export const db = getFirestore(firebaseApp);

// Browser-only analytics (no-op in SSR / Node)
isSupported()
  .then((ok) => {
    if (ok) getAnalytics(firebaseApp);
  })
  .catch(() => {});

export default firebaseApp;
