import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Link } from '../models/link';
import { Store } from '@ngrx/store';
import { getAllLinksList } from './store/links.selector';
import { linkActionTypes } from './store/links-actions';
import { authSelector } from '../Login_user/store/login-selector';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  links$: any;
  isLoggedIn: boolean;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(linkActionTypes.loadLinks()); // dispatch load links actions
    this.store.select(getAllLinksList).subscribe(result =>  this.links$ = result); // get all links list
    this.store.select(authSelector).subscribe(state => {
      if (state) {
        this.isLoggedIn = state.isAuthenticated;
      }
    }); // set isLoggedIn to true if logged in
  }

  // Delete Link function
  deleteLink(linkId: number): void {
    alert("delete called");
    this.store.dispatch(linkActionTypes.deleteLink({linkId})); // dispatch delete link action
  }

}
