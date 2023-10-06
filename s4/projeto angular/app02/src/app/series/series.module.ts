import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SeriesComponent } from "./series.component";
import { SeriesFormComponent } from './series-form/series-form.component';
import { SerieDetalheComponent } from './serie-detalhe/serie-detalhe.component';
import { SeriesRoutingModule } from "./series.routing.module";

@NgModule({
    imports: [
        CommonModule,
        SeriesRoutingModule
    ],
    exports:[

    ],
    declarations:[
        SeriesComponent, 
        SeriesFormComponent, 
        SerieDetalheComponent
    ]
    
})
export class SeriesModule{}