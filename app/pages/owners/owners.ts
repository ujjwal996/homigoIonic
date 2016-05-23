//Comments starting with "#" are to deal with handling data imported without http.get request. They use mock-details instead.

import {Page, NavController} from 'ionic-angular';
import {OnInit} from '@angular/core';
import {OwnerService} from '../../providers/owners/owner-service';
import {OwnerDetails} from '../../providers/owners/owner-details';
import {PropertyPage} from '../properties/properties';
import {PropertyDetails} from '../../providers/properties/property-details';

@Page({
    templateUrl: 'build/pages/owners/owners.html',
    providers: [OwnerService]
})


export class OwnerPage implements OnInit {
    owners: any;
    constructor(
        private _ownerservice: OwnerService,
        private nav: NavController
    ) { }

    getOwners() {
        this._ownerservice.getOwners().subscribe(
            data => this.owners = data,
            error=> console.log("could not get owners : " + error),
            () => console.log('completed')
        )
        console.log(this.owners);//debug statement
  
        //"#"  this._ownerservice.getOwners().then(owners=>this.owners = owners,error=>console.log("could not parse""));
    }

    goToProperties(owner: OwnerDetails) {
        this.nav.push(PropertyPage, { selectedOwner: owner });
    }

    ngOnInit() {
        this.getOwners();
    }

}
