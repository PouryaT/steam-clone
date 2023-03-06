import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn:"root"
})
export class sidebarService {
    clicked = new BehaviorSubject<boolean>(false);
}