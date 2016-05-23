//Comments starting with "#" are to deal with handling data imported without http.get request. They use mock-details instead.
import {Injectable} from '@angular/core';
import {Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {PropertyDetails} from './property-details';
//"#"import {OWNEDPROP} from './property-mock-details';
import {OwnerDetails} from '../owners/owner-details';


@Injectable()
export class PropertyService {
  properties : PropertyDetails[];
  private propertyUrl = "../../houses.json";
  
   constructor(private http: Http) {}
  
  getProperties(selectedOwner : OwnerDetails){
      
      
/*"#" getProperties(selectedOwner : OwnerDetails) {
    for( var i = 0 ; i<OWNEDPROP.length; i++)
      {
          if(OWNEDPROP[i].owner_id == selectedOwner.id)
            this.properties.push(OWNEDPROP[i]);
      }
      return Promise.resolve(this.properties);
      }
*/
    this.http.get(this.propertyUrl)
                    .map( res => res.json())
                    .subscribe(data => {
                        for (var i=0; i<data.length;i++)
                        {
                            if(data[i].owner_id == selectedOwner.id )
                                this.properties.push(data[i]);//filter those properties that are owned by the owner
                        }
                        return(this.properties);
                    },
                    error=> {
                        console.log(error);
                        return null;
                    },
                    ()=> console.log("completed") 
                    );
  }
  
 

}