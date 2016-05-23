//Comments starting with "#" are to deal with handling data imported without http.get request. They use mock-details instead.
import {Page, NavController, NavParams, ViewController} from 'ionic-angular';
import {OnInit} from '@angular/core';
import {TenantService} from '../../providers/tenants/tenant-service';
import {PropertyDetails} from '../../providers/properties/property-details';

@Page({
    template: 'build/pages/tenants/tenants.html'
})

export class TenantsModalPage implements OnInit {
    selectedProperty: PropertyDetails;
    property_tenants: any;

    constructor(private view: ViewController,
        private navParams: NavParams,
        private _tenantservice: TenantService) {
        this.selectedProperty = navParams.get('property');
    }

    getTenants() {
        this.property_tenants = this._tenantservice.getTenants(this.selectedProperty);
        //"#" this._tenantservice.getTenants(this.selectedProperty).then(tenants => this.property_tenants = tenants,error=> console.log("could not parse tenants data"));
    }

    close() {
        this.view.dismiss();
    }

    ngOnInit() {
        this.getTenants();
    }
}