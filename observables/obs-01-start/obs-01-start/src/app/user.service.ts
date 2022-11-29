import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root' // short and easy way instead of adding in add.module.ts - providers
})
export class UserService{
  activatedEmitter = new Subject<boolean>();
}
