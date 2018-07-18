import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

  title = 'app';
  constructor(private router: Router) { }

    public menuMode = 'horizontal';

    public menuActive = true;

    public topbarMenuActive = false;

    activeTopbarItem: Element;

    menuClick: boolean;

    menuButtonClick: boolean;

    topbarMenuButtonClick: boolean;

    resetMenu: boolean;

    menuHoverActive: boolean;

    exibirNavBar() {
      return this.router.url !== '/login';

    }

    onMenuButtonClick(event: Event) {
        this.menuButtonClick = true;
        this.menuActive = !this.menuActive;
        event.preventDefault();
    }

    onTopbarMenuButtonClick(event: Event) {
        this.topbarMenuButtonClick = true;
        this.topbarMenuActive = !this.topbarMenuActive;
        event.preventDefault();
    }

    onTopbarItemClick(event: Event, item: Element) {
        this.topbarMenuButtonClick = true;

        if (this.activeTopbarItem === item) {
          this.activeTopbarItem = null;
        } else {
          this.activeTopbarItem = item;
        }
        event.preventDefault();
    }

    onTopbarSubItemClick(event){
        event.preventDefault();
    }

    onLayoutClick() {
        if (!this.menuButtonClick && !this.menuClick) {
            if (this.menuMode === 'horizontal') {
                this.resetMenu = true;
            }

            if (this.isMobile() || this.menuMode === 'overlay' || this.menuMode === 'popup') {
                this.menuActive = false;
            }

            this.menuHoverActive = false;
        }

        if (!this.topbarMenuButtonClick) {
            this.activeTopbarItem = null;
            this.topbarMenuActive = false;
        }

        this.menuButtonClick = false;
        this.menuClick = false;
        this.topbarMenuButtonClick = false;
    }

    onMenuClick() {
        this.menuClick = true;
        this.resetMenu = false;
    }

    isMobile() {
        return window.innerWidth < 1025;
    }

    isHorizontal() {
        return this.menuMode === 'horizontal';
    }

    isTablet() {
        const width = window.innerWidth;
        return width <= 1024 && width > 640;
    }
}
