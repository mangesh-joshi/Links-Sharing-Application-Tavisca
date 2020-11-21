import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Update } from '@ngrx/entity';
import { Link } from '../../models/link';
import { addLink, linkActionTypes, linkLoaded, loadLink } from '../store/links-actions';
import { NgForm } from '@angular/forms';
import { getLinkDetails } from '../store/links.selector';

@Component({
  selector: 'app-add-new-link',
  templateUrl: './add-new-link.component.html',
  styleUrls: ['./add-new-link.component.scss']
})
export class AddNewLinkComponent implements OnInit {

  submitted = false;
  public link = new Link();
  showAdd = true;
  id: string;
  tempLink: Link[];

  constructor(private store: Store, private router: Router, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id'); // Get edit link id
    });

    if (this.id) {
      this.showAdd = false; // Hide Add Link button

      this.store.dispatch(loadLink({linkId: this.id}));
      this.store.select(getLinkDetails).subscribe( response => {
        this.tempLink = response;
        this.link = {...this.tempLink[0]}; // Link details to be updated
      });
    }

  }

  ngOnInit(): void {}

  onSubmit(form: NgForm, type: string): void {
    this.submitted = true;

    if (form.valid) {
      if (type === 'add') {
        this.store.dispatch(addLink({link : this.link})); // dispatch add link action if type is add
      } else {
        if (type === 'edit') {
          // update link payload
          const update: Update<Link> = {
            id: this.link.id,
            changes: {
              ...this.link,
              ...form.value
            }
          };

          this.store.dispatch(linkActionTypes.updateLink({update})); // dispatch update link action if type is edit
        }
      }
    }
  }
}
