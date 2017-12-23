import { SectionService } from '../services/section.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private sectionService: SectionService) {}
  sections = this.sectionService.getSections();
}
