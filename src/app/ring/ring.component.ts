import { Component, OnInit } from '@angular/core';
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DBService } from '../db.service';

@Component({
  selector: 'app-ring',
  templateUrl: './ring.component.html',
  styleUrls: ['./ring.component.css']
})
export class RingComponent implements OnInit {
  

  jewelaries : any;

  constructor(firestore: AngularFirestore, private db: DBService) {
    this.fetchPromoCodes();
  }

  async fetchPromoCodes(){
    const firestoreDB = getFirestore(this.db.app);
    const promoCodeCollection = collection(firestoreDB,'Rings');
    const snapshots = await getDocs(promoCodeCollection);
    this.jewelaries = snapshots.docs.map(doc => ({...doc.data(),price:parseInt(doc.data().weight)*4680}));
  }
  
  ngOnInit(): void {

  }
  

}
