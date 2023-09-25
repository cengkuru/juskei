import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  activeTab: string = 'Bore hole patterns ';  // Initialize the active tab

  // Function to set the active tab
  setActiveTab(eventOrTab: Event | string): void {
    if (eventOrTab instanceof Event) {
      const target = eventOrTab.target as HTMLSelectElement;
      if (target && target.value) {
        this.activeTab = target.value;
      }
    } else {
      this.activeTab = eventOrTab;
    }
  }

  // Function to check if a tab is active
  isTabActive(tabName: string): boolean {
    return this.activeTab === tabName;
  }

  protected readonly HTMLSelectElement = HTMLSelectElement;
}
