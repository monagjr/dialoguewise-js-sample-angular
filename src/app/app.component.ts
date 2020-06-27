import { Component, OnInit } from '@angular/core';
import { DialogueWiseService, DialogueWiseRequest } from 'dialoguewise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sample';
  heroContent = '';

  async ngOnInit(): Promise<void>{
    const request: DialogueWiseRequest = {
      slug: 'hero-section',
      apiKey: 'b1266377591c4f2a9494c3abdd2cac5381D6Z825D26CEBAE8B6rn',
      emailHash: '/kgmM46s1xC56BOFWRZp4j+0bdU19URpXdNT9liAX50=',
    };

    const dialogueWiseService = new DialogueWiseService();
    const res = await dialogueWiseService.getDialogue(request);
    this.heroContent = res.dialogue[0]['hero-content'];
  }
}
