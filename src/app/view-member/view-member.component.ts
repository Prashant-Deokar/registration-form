import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MemberServiceService } from '../member-service.service';
import {Message} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-view-member',
  templateUrl: './view-member.component.html',
  styleUrls: ['./view-member.component.scss'],
  providers: [ConfirmationService,MessageService]
})
export class ViewMemberComponent implements OnInit {

  constructor( private memberService:MemberServiceService,private router:Router,private formBuilder:FormBuilder,private confirmationService: ConfirmationService,private messageService: MessageService) { }
  newestItems: any=[];
  memberById:any;
  updateMemberById:any;
  userform:FormGroup
  display: boolean = false;
  msgs: Message[] = [];
  ngOnInit(): void {

    this.userform=this.formBuilder.group({
      
      fullName: ['',[Validators.required]],
      email: ['',[Validators.required]],
      gender: ['',[Validators.required]],
      mobile: ['',[Validators.required]],
      dob:  ['',[Validators.required]],
      addressLine1: ['',[Validators.required]],
      addressLine2: ['',[Validators.required]],
      city: ['',[Validators.required]],
      state: ['',[Validators.required]],
      country: ['',[Validators.required]],
      pinCode:  ['',[Validators.required]],
      skills:  ['',[Validators.required]],

    })
    this.memberService.getAllMember().subscribe((data)=>{
      console.log(data);
       this.newestItems=data;

      });
      console.log( this.newestItems.skills);
      
  }

  viewMember(id:any){
    this.memberById=id
    localStorage.setItem("id",id)
      this.router.navigate(['/view/memberBy/Id']);
  }
  updateMember(memberId:any){
    this.userform.patchValue(memberId);
    this.updateMemberById=memberId
    localStorage.setItem("memberId",memberId)
      this.router.navigate(['/update/memberBy/Id',memberId]);
  }
  // deleteMember(id:any){

  //   this.confirmationService.confirm({
  //     message: 'Are you sure that you want to delete this member?',
  //     header: 'Delete Confirmation',
  //     icon: 'pi pi-info-circle',
  //     accept: () => {
        
  //       this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
  //       alert("member id " +id+ " is deleted ")
        
  //   this.memberService.deleteMember(id).subscribe(
  //     data =>{
  
  //     window. location. reload();
  //     });
  //     this.router.navigate(['/view/member']);
  //      console.log(id);
  //         //Actual logic to perform a confirmation
  //     },reject: () => {
  //       this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
  //       // alert("member  id " +id+ " connot be deleted ")
        
  //   }
  // });




  // }
  deleteMember(id:any){
    this.confirmationService.confirm({
  
        message: 'Are you sure that you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
    
            this.memberService.deleteMember(id).subscribe(
              data =>{
                setTimeout(() => {
                  window. location. reload();
                
                }, 1000)
                this.messageService.add({severity:'error', summary: 'Error', detail: 'Member Deleted successfuly'});
                
         
              });
        },
        reject: () => {
           
               
        }
    });
}
}
