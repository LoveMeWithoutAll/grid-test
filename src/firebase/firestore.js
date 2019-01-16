import Firebase from 'firebase'
import { FIREBASE_CONFIG } from '@/config'

export const firebaseApp = Firebase.initializeApp(FIREBASE_CONFIG)
export const firestore = firebaseApp.firestore()
firestore.settings({ timestampsInSnapshots: true })
