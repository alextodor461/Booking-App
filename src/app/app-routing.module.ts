import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { FormComponent } from './form/form.component';
import { StarterPageComponent } from './starter-page/starter-page.component';

const routes: Routes = [
  { path: '', component: StarterPageComponent },
  { path: 'form', component: FormComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
