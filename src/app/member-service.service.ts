import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberServiceService {

  constructor(private http:HttpClient) { }

  getAllMember() {
    return this.http.get<any[]>(`http://localhost:3000/member`);
   }
   getMemberById(id:number) {
    return this.http.get<any[]>(`http://localhost:3000/member/${id}`);
   }
   deleteMember(id:number) {
    return this.http.delete(`http://localhost:3000/member/${id}`);
   }
 
   registerMember(member:any) {
  return this.http.post(`http://localhost:3000/member`,member);
}
   updateMember(id: any,value:any) {
  return this.http.put(`http://localhost:3000/member/${id}`,value);
}
}
