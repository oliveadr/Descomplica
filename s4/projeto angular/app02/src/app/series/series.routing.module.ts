import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeriesComponent } from './series.component';
import { SerieDetalheComponent } from './serie-detalhe/serie-detalhe.component';
import { SeriesFormComponent } from './series-form/series-form.component';


const seriesRoutes = [
    {path: 'series', component:SeriesComponent, children:[
        {path: 'novo', component:SeriesFormComponent},
        {path: ':id', component:SerieDetalheComponent},
        {path: ':id/editar', component:SeriesFormComponent},
        ]
    }
    

];

@NgModule({
    imports:[RouterModule.forChild (seriesRoutes)],
    exports: [RouterModule]
})

export class SeriesRoutingModule{}