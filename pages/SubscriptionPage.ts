import { Page, Locator } from '@playwright/test';

export class SubscriptionPage {
    readonly page: Page;
    readonly enSavoirPlusBtn: Locator;
    readonly reserverBtn: Locator;
    readonly ajouterUneCabineBtn: Locator;
    readonly ajouterAuPanierBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.enSavoirPlusBtn = page.locator('button:has-text("En savoir plus")').first();
        this.reserverBtn = page.locator('button:has-text("Réserver")');
        //  selector general pour n'importe qu"elle cabine
        this.ajouterUneCabineBtn = page.locator('button:has-text("Ajouter une cabine")');
        this.ajouterAuPanierBtn = page.locator('button:has-text("Ajouter au panier")');
    }

    async souscrireOffreDynamique() {
        await this.enSavoirPlusBtn.click();
        await this.reserverBtn.click();

        // wait until affichage des cabines
        //  '.cabin-item-image'  '.cabin-item' pas tjrs trouvable
        const cabine = this.page.locator('.cabin-item-image, .cabin-item, .img-fluid').first();
        await cabine.waitFor({ state: 'visible', timeout: 15000 });
        await cabine.click();

        await this.ajouterUneCabineBtn.waitFor({ state: 'visible' });
        await this.ajouterUneCabineBtn.click();

        // attendre la redirection
        await this.ajouterAuPanierBtn.click();
        await this.page.waitForLoadState('networkidle');
    }
}