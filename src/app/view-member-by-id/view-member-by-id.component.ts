import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberServiceService } from '../member-service.service';

@Component({
  selector: 'app-view-member-by-id',
  templateUrl: './view-member-by-id.component.html',
  styleUrls: ['./view-member-by-id.component.scss']
})
export class ViewMemberByIdComponent implements OnInit {

  constructor(private memberService:MemberServiceService,private router:Router) { }
   id:any;
   newestItems:any=[]
  ngOnInit(): void {
    this.id=localStorage.getItem("id")
    
     this.memberService.getMemberById(this.id).subscribe((data)=>{
      console.log("testttt tha datata",data);
      this.newestItems= new Array(data)
      // this.newestItems=data
     

      });
    
  }

}
