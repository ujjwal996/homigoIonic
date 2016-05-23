import {Page, NavController, NavParams, Modal} from 'ionic-angular';
import {OnInit} from '@angular/core';
import {PropertyService} from '../../providers/properties/property-service';
import {TenantService} from '../../providers/tenants/tenant-service';
import {OwnerDetails} from '../../providers/owners/owner-details';
import {PropertyDetails} from '../../providers/properties/property-details';
import {TenantsModalPage} from '../tenants/tenants';


@Page({
    template: 'build/pages/properties/properties.html',
    providers: [PropertyService]
})

export class PropertyPage implements OnInit {
    selectedOwner: OwnerDetails;
    owners_properties: any;//to allow void return from error in retrieving json
    property_tenants: any;

    constructor(
        private _propertyservice: PropertyService,
        private _tenantservice: TenantService,
        private nav: NavController,
        private navParams: NavParams

    ) {
        this.selectedOwner = this.navParams.get('selectedOwner');//parameter=> OwnerPage choice
    }

    getProperties(selectedOwner) {
      
        this.owners_properties = this._propertyservice.getProperties(selectedOwner);
        //"#" this._propertyservice.getProperties(this.selectedOwner).then(properties=> this.owners_properties = properties,error=> console.log("could not get properties"));
    }


    openTenantsModal(property: PropertyDetails) {
        
        let tenant_modal = Modal.create(TenantsModalPage, { property });
        this.nav.present(tenant_modal);
    
    }

    ngOnInit() {
        this.getProperties(this.selectedOwner);
    }
}