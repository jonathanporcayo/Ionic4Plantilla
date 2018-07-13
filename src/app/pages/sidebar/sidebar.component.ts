import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ap-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
    //this is for the open close
    isActive: boolean = true;
    showMenu: string = '';
    showSubMenu: string = '';
    
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element; 
        }
    }
    addActiveClass(element: any) {
        if (element === this.showSubMenu) {
            this.showSubMenu = '0';
        } else {
            this.showSubMenu = element; 
        }
    }
    eventCalled() {
        this.isActive = !this.isActive;
        
    }
    
}

