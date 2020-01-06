import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import {DashboardComponent} from "./pages/listarticle/dashboard.component";
import {IconsComponent} from "./pages/icons/icons.component";
import {MapComponent} from "./pages/map/map.component";
import {UserComponent} from "./pages/user/user.component";
import {TablesComponent} from "./pages/tables/tables.component";
import {TypographyComponent} from './pages/typography/typography.component';
import {EmployeeListComponent} from './pages/employee-list/employee-list.component';
import {EmployeeDetailsComponent} from './pages/employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './pages/update-employee/update-employee.component';
import { CreateEmployeeComponent } from './pages/create-employee/create-employee.component';
import { CategorieListComponent } from './pages/categorie-list/categorie-list.component';
import { RechercheComponent } from './pages/recherche/recherche.component';
import { VenteComponent } from './pages/vente/vente.component';
import { ListMaintenanceComponent } from './pages/list-maintenance/list-maintenance.component';
import { CreateMaintenanceComponent } from './pages/create-maintenance/create-maintenance.component';
import { DetailMaintenanceComponent } from './pages/detail-maintenance/detail-maintenance.component';
import { UpdateMaintenanceComponent } from './pages/update-maintenance/update-maintenance.component';
import { RetourMaintenanceComponent } from './pages/retour-maintenance/retour-maintenance.component';
const routes: Routes = [
  { path: 'details/:id', component: EmployeeDetailsComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'article', component: EmployeeListComponent },
  { path: 'cat', component: CategorieListComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: 'recherche', component: RechercheComponent },
  { path: 'vente', component: VenteComponent },
  { path: 'maintenence', component: ListMaintenanceComponent },
  { path: 'detailm/:id', component: DetailMaintenanceComponent },
  { path: 'updatem/:id', component: UpdateMaintenanceComponent },
  { path: 'repare', component: RetourMaintenanceComponent },
  { path: 'Createmaintenence', component: CreateMaintenanceComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  { path: '', redirectTo: 'article', pathMatch: 'full' },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
