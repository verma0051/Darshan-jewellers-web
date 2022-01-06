import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut  } from 'firebase/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { getFirestore, collection, addDoc, setDoc, doc, Timestamp } from '@firebase/firestore/lite'
import { DBService } from '../db.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


  authForm = new FormGroup(
    {
      email:new FormControl(''),
      password: new FormControl(''),
    }
  );

  constructor(private db:DBService) { }

  ngOnInit(): void {
  }
  
  registerUser(){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth,this.authForm.value.email,this.authForm.value.password)
    .then((userCredential)=>{
      console.log("User Created in Auth Module");
      const user = userCredential.user;
    })
  }
}
