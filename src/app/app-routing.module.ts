import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMemberComponent } from './create-member/create-member.component';
import { UpdateMemberComponent } from './update-member/update-member.component';
import { ViewMemberByIdComponent } from './view-member-by-id/view-member-by-id.component';
import { ViewMemberComponent } from './view-member/view-member.component';

const routes: Routes = [
  {path:'', component:CreateMemberComponent},
  {path:'create/member',component:CreateMemberComponent},
  // {path:'view/member',component:ViewMemberComponent},
  // {path:'view/memberBy/Id',component:ViewMemberByIdComponent},
  // {path:'update/memberBy/Id/:id',component:UpdateMemberComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
