import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
 
import { CanActivate } from '@angular/router';
import * as $ from 'jquery';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
    account: any = { };
    
    constructor(public router: Router) {}

    ngOnInit() {}

    ngAfterViewInit() {
        $(function() {
            $(".preloader").fadeOut();
        });
        $(function() {
            (<any>$('[data-toggle="tooltip"]')).tooltip()
        });
        $('#to-recover').on("click", function() {
            $("#loginform").slideUp();
            $("#recoverform").fadeIn();
        });
    }

    onLoggedin() {
        if(this.account.email && this.account.password){
            localStorage.setItem('isLoggedin', 'true');
            this.router.navigate(['/home']);
        }else{
            alert('campos vasios')
        }
        
    }

}
