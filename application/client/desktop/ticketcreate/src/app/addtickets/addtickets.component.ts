import { Component, OnInit } from '@angular/core';
import { AddticketsService } from './addtickets.service';

@Component({
  selector: 'app-addtickets',
  templateUrl: './addtickets.component.html',
  styleUrls: ['./addtickets.component.scss'],
})

export class AddticketsComponent implements OnInit {
    public tickets = {
        name: '',
        groups: '',
        description: '',
    }

    constructor (
        private addticketsService: AddticketsService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.addticketsService.GpCreate(this.tickets).subscribe(data => {
            this.tickets.name = ''
 	 	this.tickets.groups = ''
 	 	this.tickets.description = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}