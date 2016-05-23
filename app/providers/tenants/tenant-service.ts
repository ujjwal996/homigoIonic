//Comments starting with "#" are to deal with handling data imported without http.get request. They use mock-details instead.
import {Injectable} from '@angular/core'
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {TenantDetails} from './tenant-details';
import {PropertyDetails} from '../properties/property-details';
//"#"import {PROPTENANTS} from './tenant-mock-details';

@Injectable()
export class TenantService {
  
  tenants : TenantDetails[];
  private tenantUrl = 'app/tenants.json';
  
  constructor(private http:Http){}
  
  getTenants(selectedProperty : PropertyDetails){
     
     
     /*"#" getTenants(selectedProperty:PropertyDetails){ for( var i = 0 ; i<PROPTENANTS.length; i++)
      {
          if(PROPTENANTS[i].property_id == selectedProperty.id)
            this.tenants.push(PROPTENANTS[i]);
      }
      return Promise.resolve(this.tenants);
  }
  }*/
    this.http.get(this.tenantUrl).map(res=> res.json()).subscribe(
        data=>{
            for (var i=0 ; i<data.length() ; i++)
            {
                if(data[i].property_id == selectedProperty.id)
                    this.tenants.push(data[i]);
            }
            return this.tenants;
        },
        error=>console.log('error in getting property tenants'+ error),
        ()=>console.log("completed")
    )


  }
  
}