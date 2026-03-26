import { Page, Locator } from '@playwright/test';

export class LogoutPage {
    readonly page: Page;
    readonly userMenuBtn: Locator;
    readonly logoutBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        // utilisation de regex /Bienvenue/ 
        this.userMenuBtn = page.getByRole('button', { name: /Bienvenue/i });
        this.logoutBtn = page.getByRole('button', { name: 'Se déconnecter' });
    }

    async logout() {
        await this.userMenuBtn.click();
        await this.logoutBtn.click();
    }
}