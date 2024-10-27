import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, catchError, delay, EMPTY} from 'rxjs';
import {AdminService} from "../services/admin.service";
import {IUser} from "../user";

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<IUser> {
  constructor(private adminService: AdminService, private router: Router) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> {
    return this.adminService.getPerson(route.params?.['id']).pipe(
      delay(1000),
      catchError(() => {
        this.router.navigate(['admin/contacts']);
        return EMPTY;
      })
    )
  }
}
