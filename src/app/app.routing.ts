//Import de modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//Import de componentes
import { HomeComponent } from './components/home/home.component';
import { SuperheroesComponent } from './components/superheroes/superheroes.component';



//Array de rutas
const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'superheroes', component: SuperheroesComponent}
];


//Export de modulo del router
export const appRoutingProviders: any[] = []; //servicio del router necesario para que funcione el router
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes); //modulo del router 
