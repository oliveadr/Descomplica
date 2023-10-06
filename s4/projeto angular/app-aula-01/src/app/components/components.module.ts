import{ NgModule} from "@angular/core";
import { HeaderComponents } from "./header.components";
import { RouterModule } from "@angular/router";

@NgModule(
    {
        imports:[
            RouterModule
        ],
        declarations:[
            HeaderComponents
        ],
        exports:[
            HeaderComponents
        ]
    }
)


export class ComponentModule {

}