import { Component, OnInit } from '@angular/core';
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DBService } from '../db.service';


@Component({
  selector: 'app-chain',
  templateUrl: './chain.component.html',
  styleUrls: ['./chain.component.css']
})
export class ChainComponent implements OnInit {
  jewelaries : any;

  constructor(firestore: AngularFirestore, private db: DBService) {
    this.fetchPromoCodes();
  }

  async fetchPromoCodes(){
    const firestoreDB = getFirestore(this.db.app);
    const promoCodeCollection = collection(firestoreDB,'Chain');
    const snapshots = await getDocs(promoCodeCollection);
    this.jewelaries = snapshots.docs.map(doc => ({...doc.data(),price:parseInt(doc.data().weight)*4680}));
  }
  
  ngOnInit(): void {

  }

}
