import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tabs: { url: string }[] = [];
  currentIndex: number | null = null;

  addTab() {
    this.tabs.push({ url: '' });
    this.currentIndex = this.tabs.length - 1;
  }

  closeTab(index: number) {
    this.tabs.splice(index, 1);

    if (this.tabs.length === 0) {
      this.currentIndex = null;
    } else {
      this.currentIndex = Math.min(Math.max(0, this.currentIndex || 0), this.tabs.length - 1);
    }
  }

  switchTab(index: number) {
    this.currentIndex = index;
  }

  loadURL() {
    if (this.currentIndex !== null && this.tabs[this.currentIndex]) {
      const currentTab = this.tabs[this.currentIndex];
      if (currentTab.url.trim() !== '') {
        // Update the iframe or perform any other necessary actions
      }
    }
  }
}
