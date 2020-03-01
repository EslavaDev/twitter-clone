import * as admin from 'firebase-admin';

export class FirebaseDatabase {

    save(path: string, content: any): Promise<void> {
        const documentRef = admin.database().ref(path);
        return documentRef.set(content);
    }

    get(path: string): Promise<any> {
        const documentRef = admin.database().ref(path);
        return documentRef.once('value').then(snapshot => snapshot.val());
    }

}