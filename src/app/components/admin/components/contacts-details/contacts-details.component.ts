import { Component, OnInit } from '@angular/core';
import {Observable, map} from "rxjs";
import {IUser} from "../../user";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.scss']
})
export class ContactsDetailsComponent implements OnInit {
  user!: Observable<IUser>

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = this.activatedRoute.data.pipe(map((data) => data?.['user'] ))
  }
}
