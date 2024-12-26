import { Routes } from '@angular/router';
import { SparkComponent } from './projects/spark-analysis/spark/spark.component';
import { StockComponent } from './projects/spark-analysis/stock/stock.component';
import { AboutMeComponent } from './homepage/about-me/about-me.component';

export const routes: Routes = [
    {path: "", redirectTo:'/about-me', pathMatch:'full'},
    {path: 'about-me', component: AboutMeComponent},
    {path: "sparkAnalysis", component: SparkComponent},
    {path: "stockAnalysis", component: StockComponent},
];

