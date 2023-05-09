import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Ide importáld a komponenseidet
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AuthGuard } from './auth.guard';

// AuthGuard importálása
// import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
