import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberServiceService } from '../member-service.service';

@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.scss']
})
export class UpdateMemberComponent implements OnInit {

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private formBuilder:FormBuilder,
    private memberService:MemberServiceService,
    
    ) { }
  newestItems:any=[]
  val:any
  userform:FormGroup
  selected:any=null
  cities:any[] =[

    {id : 1, name:"Amaravati"},
    {id : 2, name:"Itanagar"},
    {id : 3, name:"Panaji"},
    {id : 4, name:"Gandhinagar"},
    {id : 5, name:"Mumbai"}
    
];
Gender:any[]=
[
{id : 1, name:"Male", value :'M'},
{id : 2, name:"Female", value :"F"},
{id : 3, name:"Transgender", value :"T"},
];

State:any[] =[

  {id : 1, name:"Andhra Pradesh"},
  {id : 2, name:"Arunachal Pradesh"},
  {id : 3, name:"Goa"},
  {id : 4, name:"Gujarat"},
  {id : 5, name:"Maharashtra"}
  
  
];
Country:any[] =[

  {id : 1, name:"India"}
  
];

Skills:any[] =[

  {id : 1, name: "Angular"},
  {id : 2, name:".NET"},
  {id : 3, name:"JAVA"},
  {id : 4, name:"CSS"},
  {id : 5, name:"HTML"}
  
  
];
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


      
      paddressLine1: ['',[Validators.required]],
      paddressLine2: ['',[Validators.required]],
      pcity: ['',[Validators.required]],
      pstate: ['',[Validators.required]],
      pcountry: ['',[Validators.required]],
      ppinCode:  ['',[Validators.required]],

    })



       let sub =this.route.params.subscribe(params =>{
      this.val=params['id']
      console.log(this.val);
      
       })
      this.memberService.getMemberById(this.val).subscribe((data)=>{
      console.log("testttt tha datata",data);
      this.newestItems= new Array(data)
      console.log("newwww",this.newestItems);
    
    
      
      });
      console.log(this.newestItems.fullName.value);
      
      this.userform.controls['fullName'].patchValue(this.newestItems.fullName.value);
      // this.userform.patchValue({
      //   fullName:this.newestItems.fullName.value,
      // })
  }
  checkBox(event:any){
    console.log(event);
    this.userform.patchValue({
      paddressLine1: this.userform.controls['addressLine1'].value,
      paddressLine2: this.userform.controls['addressLine2'].value,
      pcity:this.userform.controls['city'].value,
      pstate:this.userform.controls['state'].value,
      pcountry:this.userform.controls['country'].value,
      ppinCode:this.userform.controls['pinCode'].value,
    })
  
  console.log( this.userform.value);
  
  }

  onSubmit(){
 
    console.log(this.userform.value);
 
    if(true){
     
     console.log(true);
     let dd=this.userform.value;
    let newdd= new Array(dd)
     this.memberService.updateMember(this.val,this.userform.value).subscribe(data=>{
      console.log(data);
      
      alert("Member updated successfully");
      this.router.navigateByUrl('/view/member');
     
     },error =>{
     alert("something went wrong")
     })
  
      }else
      {
        alert("invalid form filled all the filed")
      }
  
    
    }

}
