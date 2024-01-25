import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {
    path: 'parent', 
    component: ParentComponent,
    children: [
      {
        path:'child',
        component: ChildComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'parent',
    pathMatch: 'full'
  },
  {
    path:'**',
    redirectTo: 'parent'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
