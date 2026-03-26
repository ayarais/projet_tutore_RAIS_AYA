import { Page, Locator } from '@playwright/test';

export class SubscriptionPage {
    readonly page: Page;
    readonly tabAfrique: Locator;
    readonly enSavoirPlusBtn: Locator;
    readonly reserverBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.tabAfrique = page.getByRole('tab', { name: 'AFRIQUE' });
        // On cible le 4ème bouton (index 3) 
        this.enSavoirPlusBtn = page.getByRole('button', { name: 'En savoir plus' });
        this.reserverBtn = page.getByRole('button', { name: 'Réserver' });
    }

    async selectCruiseAndReserve() {
        await this.tabAfrique.click();
        await this.enSavoirPlusBtn.nth(3).click();
        await this.reserverBtn.click();
    }
}