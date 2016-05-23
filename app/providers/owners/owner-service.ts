//Comments starting with "#" are to deal with handling data imported without http.get request. They use mock-details instead.
import {Injectable} from '@angular/core';
import {Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {OwnerDetails} from './owner-details';
//"#"import {OWNERS} from './owner-mock-details';


@Injectable()
export class OwnerService {
  data: any = null;
/*"#"  getOwners(){
      return Promise.resolve(OWNERS);//mockdata
 }*/


   
    private ownersUrl = "../../owners.json";
  constructor(public http: Http) {}

    getOwners() {
    return this.http.get(this.ownersUrl)
                    .map(res => res.json());//subscription in class OwnerPage
                }
  
 
  
}


