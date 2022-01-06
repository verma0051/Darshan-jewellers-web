import { Component, OnInit } from '@angular/core';
import { collection, doc, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DBService } from '../db.service';

@Component({
  selector: 'app-bangles',
  templateUrl: './bangles.component.html',
  styleUrls: ['./bangles.component.css']
})
export class BanglesComponent implements OnInit {
  Bangles : any;

  constructor(firestore: AngularFirestore, private db: DBService) {
    this.fetchPromoCodes();
  }

  async fetchPromoCodes(){
    const firestoreDB = getFirestore(this.db.app);
    const promoCodeCollection = collection(firestoreDB,'Bangles');
    const snapshots = await getDocs(promoCodeCollection);
    this.Bangles = snapshots.docs.map(doc => ({...doc.data(),price:parseInt(doc.data().weight)*4680}));
  }
  
  ngOnInit(): void {

  }

}
