import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
    @HostBinding('attr.class') cssClass = 'main-nav';
    
    ngOnInit(){}
}