import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { MemberServiceService } from '../member-service.service';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
import { Margins } from 'pdfmake/interfaces';
export class Profile {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
}
@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.scss'],
  providers: [ConfirmationService,MessageService]
})

export class CreateMemberComponent implements OnInit {
  profile:Profile
  value: Date;
  userform:FormGroup;
  userformsame:FormGroup;
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
 isChecked = false;
 newestItems: any=[];
 memberById:any;
 updateMemberById:any;

 display: boolean = false;
 msgs: Message[] = [];
selectedValues:boolean=false
viewMemberData:FormGroup;
Items:any=[

]
fullName ="";
email ='';
gender='';
mobile=''
  dob:any
  addressLine1: any;
  addressLine2: any;
  city: any;
  state: any;
  pinCode: any;
  country: any;
  skills: any;

  paddressLine1: any;
  paddressLine2: any;
  pcity: any;
  pstate: any;
  ppinCode: any;
  pcountry: any;
  isreadOnly :boolean=false
  condition =1
  memberid:any
 updated=false
 submited=true
 disabled:boolean=false
 exportType: any = "Export";
 pattern="^[ a-zA-Z][a-zA-Z ]*$";
 numericNumberReg= "^[0-9]{10}$";
  @ViewChild('yourContainer', {static:true}) yourContainer: ElementRef;
constructor( private memberService:MemberServiceService,private router:Router,private formBuilder:FormBuilder,private confirmationService: ConfirmationService,private messageService: MessageService) { }

  ngOnInit(): void {
    this.userform=this.formBuilder.group({
      fullName: ['',[Validators.required,Validators.pattern(this.pattern)]],
      email: ['',[Validators.required,Validators.email]],
      gender: ['',[Validators.required]],
      mobile: ['',[Validators.required,Validators.pattern(this.numericNumberReg)]],
      dob:  ['',[Validators.required]],
      addressLine1: ['',[Validators.required]],
      addressLine2: ['',[Validators.required]],
      city: ['',[Validators.required]],
      state: ['',[Validators.required]],
      country: ['',[Validators.required]],
      pinCode:  ['',[Validators.required]],
      skills:  ['',[Validators.required]],
      search:  ['',[Validators.required]],
      checkBox:  ['',[Validators.required]],
      paddressLine1: ['',[Validators.required]],
      paddressLine2: ['',[Validators.required]],
      pcity: ['',[Validators.required]],
      pstate: ['',[Validators.required]],
      pcountry: ['',[Validators.required]],
      ppinCode:  ['',[Validators.required]],

    })
    this.memberService.getAllMember().subscribe((data)=>{
      console.log(data);
       this.newestItems=data;

      });
    // this.userformsame=this.formBuilder.group({
      
    //   addressLine1: ['',[Validators.required]],
    //   addressLine2: ['',[Validators.required]],
    //   city: ['',[Validators.required]],
    //   state: ['',[Validators.required]],
    //   country: ['',[Validators.required]],
    //   pinCode:  ['',[Validators.required]],


    // })

  }
  generatePdf(){
    // const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
    // pdfMake.createPdf(documentDefinition).download();
    var docDefinition = {
      content: [
        {
          layout: 'lightHorizontalLines', // optional
          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 1,
            widths: [ '*', 'auto', 100, '*' ],
    
            body: [
              [ 'First', 'Second', 'Third', 'The last one' ],
              [ 'Value 1', 'Value 2', 'Value 3', 'Value 4' ],
              // [ { text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4' ]
            ]
          }
        }
      ]
    };

    // const documentDefinition = this.getDocumentDefinition();
     
      pdfMake.createPdf(docDefinition).download(); 
    
   }
   
getDocumentDefinition() {
  return {
    content: [
    {
      text: 'PROFILE',
      bold: true,
      fontSize: 20,
      alignment: 'center',
      margin: [0, 0, 0, 20]
    },
    {
    columns: [
      [{
        text: 'Firstname : ' + this.profile.firstname
      },
      {
        text: 'Lastname : ' + this.profile.email
      },
      {
        text: 'Username : ' + this.profile.username
      },
      {
        text: 'Email : ' + this.profile.lastname
      }] 
     ]
    }],
    styles: {
      name: {
        fontSize: 16,
        bold: true
    }
  }
};
}
  checkBox(event:any){
    this.isChecked = true
    console.log(event.target.checked);
    if(event.target.checked){
  this.userform.patchValue({
    paddressLine1: this.userform.controls['addressLine1'].value,
    paddressLine2: this.userform.controls['addressLine2'].value,
    pcity:this.userform.controls['city'].value,
    pstate:this.userform.controls['state'].value,
    pcountry:this.userform.controls['country'].value,
    ppinCode:this.userform.controls['pinCode'].value,
    
  });

  }else{
  //  this.userform.reset();
   this.userform.controls['paddressLine1'].reset(),
   this.userform.controls['paddressLine2'].reset(),
   this.userform.controls['pcity'].reset(),
   this.userform.controls['pstate'].reset(),
   this.userform.controls['pcountry'].reset(),
   this.userform.controls['ppinCode'].reset()
  }    

  this.isChecked=false

  
  console.log( this.userform.value);
 
  }
  search(searchName:any){
console.log("search",searchName);

}  
onChange(event:any){
    // console.log(event);
    // this.selected=event.value.name
    // console.log( this.selected);
    

  }
  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
}
  
viewMember(id:any){
 
  this.memberService.getMemberById(id).subscribe((data)=>{
  
    // let d=new Array(data)
   //console.log(data);

    this.Items=data;
    this.userform.patchValue({
      fullName:this.Items.fullName,
      email:this.Items.email,
      mobile:this.Items.mobile,
      gender:this.Items.gender,
    
  
   
      addressLine1:this.Items.addressLine1,
      addressLine2:this.Items.addressLine2,
      city:this.Items.city,
  
      state:this.Items.state,
      country:this.Items.country,
      pinCode:this.Items.pinCode,
      skills:this.Items.skills
    })
 
    // this.userform.patchValue(data)
    console.log("oooooooooo",this.userform);
    
    console.log("testttt tha datata",data);
    console.log("this.items",this.Items.fullName);
    // this.fullName=this.Items.fullName
    // this.email=this.Items.email
    // this.mobile=this.Items.mobile
    // this.gender=this.Items.gender
  

    // this.dob=this.Items.dob
    // this.addressLine1=this.Items.addressLine1
    // this.addressLine2=this.Items.addressLine2
    // this.city=this.Items.city

    // this.state=this.Items.state
    // this.country=this.Items.country
    // this.pinCode=this.Items.pinCode
    // this.skills=this.Items.skills
    // this.yourContainer.nativeElement.setAttribute("yourContainer"readOnly);
    this.isreadOnly=true
    this.disabled=true
    // console.log(this.Items.dob,"this.Items.dob");
    this.isChecked = true
    this.userform.patchValue({
  
      paddressLine1: this.userform.controls['addressLine1'].value,
      paddressLine2: this.userform.controls['addressLine2'].value,
      pcity:this.userform.controls['city'].value,
      pstate:this.userform.controls['state'].value,
      pcountry:this.userform.controls['country'].value,
      ppinCode:this.userform.controls['pinCode'].value,
    });
    });
  
  //  let arr=new Array(this.Items)
  //  console.log(arr[0]);
  //  console.log(arr[0]);
   
  
    
  // this.userform.patchValue({
  //   fullName: this.userform.controls['fullName'].value,
  //   email: this.userform.controls['email'].value,
  //   city:this.userform.controls['city'].value,
  //   state:this.userform.controls['state'].value,
  //   country:this.userform.controls['country'].value,
  //   pinCode:this.userform.controls['pinCode'].value,
  //   paddressLine1: this.userform.controls['addressLine1'].value,
  //   paddressLine2: this.userform.controls['addressLine2'].value,
  //   pcity:this.userform.controls['city'].value,
  //   pstate:this.userform.controls['state'].value,
  //   pcountry:this.userform.controls['country'].value,
  //   ppinCode:this.userform.controls['pinCode'].value,
  // });

  
  // this.memberById=id
  // localStorage.setItem("id",id)
  //   this.router.navigate(['/view/memberBy/Id']);
  // this.memberService.getMemberById(id).subscribe((data)=>{
  //   console.log("testttt tha datata",data);
  //   this.newestItems.push(data)
  //   console.log("newsitems",this.newestItems);
  //   // this.newestItems=data
   

  //   });
   

}

updateMember(memberId:any){
  this.isreadOnly = false
  this.updated=true
  this.submited=false


  this.userform.patchValue(memberId);
  this.updateMemberById=memberId
  localStorage.setItem("memberId",memberId)
  
  setTimeout(() => {

    // window. location. reload();
  
  }, 1000)
  this.memberid=localStorage.getItem("memberId")

  this.memberService.getMemberById(this.memberid).subscribe((data)=>{
    
    console.log("testttt tha datata",data);
 
    this.Items=data;
    console.log("testttt tha datata",data);
    console.log("this.items",this.Items.fullName);
    this.fullName=this.Items.fullName
    this.email=this.Items.email
    this.mobile=this.Items.mobile
    this.gender=this.Items.gender

    this.dob=this.Items.dob
    this.addressLine1=this.Items.addressLine1
    this.addressLine2=this.Items.addressLine2
    this.city=this.Items.city

    this.state=this.Items.state
    this.country=this.Items.country
    this.pinCode=this.Items.pinCode
    this.skills=this.Items.skills
    // this.yourContainer.nativeElement.setAttribute("yourContainer"readOnly);
    // this.isreadOnly=true
    // console.log(this.Items.dob,"this.Items.dob");
    // this.isChecked = true
   

    });

    localStorage.setItem("condition","true")
   
  
    // this.router.navigate(['/']);
}
onUpdateMember(){
  this.memberid=localStorage.getItem("memberId")
  console.log(this.userform.invalid);
  console.log(this.memberid);
  console.log(this.userform);
  
  
   this.memberService.updateMember(this.memberid,this.userform.value).subscribe(data=>{
      console.log(data);
      this.messageService.add({severity:'success', summary: 'Updated', detail: 'member Updated successfuly'});
      // alert("Member updated successfully");
      window. location. reload();
      // this.router.navigateByUrl('/view/member');
     
     },error =>{
     alert("something went wrong")
     })
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
              this.messageService.add({severity:'success', summary: 'Deleted', detail: 'Member Deleted successfuly'});
              
       
            });
      },
      reject: () => {
         
             
      }
  });

}

  onSubmit(){
  console.log(this.userform.value);

    if(this.userform.valid){
      
   console.log(true);
   this.memberService.registerMember(this.userform.value).subscribe(data=>{
    console.log(data);
    this.newestItems.push(data);
    // this.messageService.add({severity:'success', summary: 'Added', detail: 'member Addded successfuly'});
    this.router.navigate([this.router.url])
    this.router.navigate(['/create/member']);
    // this.router.navigateByUrl('/create/member');
    // this.router.navigateByUrl('/create/member');
    // setTimeout(() => {

    
    // }, 2000)
    this.messageService.add({severity:'success', summary: 'Successfully', detail: 'Member Added Successfully'});
    // alert("Member added successfully");
   
   
   });

    }else
    {
      // alert("invalid form filled all the required filed")
    }
    if(this.userform.invalid){
      this.messageService.add({severity:'error', summary: 'Invalid Fields', detail: 'Fields Marked With An * Are Required'});
// alert("invalid fields, fields marked with an * are required")
    }
    // if(localStorage.getItem("condition")=== "true"){

    //   this.memberService.updateMember(this.memberid, this.Items).subscribe((data)=>{
    //     alert("updated successfully")
  
    //   })
    // }
   

 
  }
  get registerFormControl() {
    return this.userform.controls;
  }
  reset(){
    this.updated=false
    this.submited=true
    this.isreadOnly=false
  }

}
