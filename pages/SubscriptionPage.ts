import { Page, Locator , expect} from '@playwright/test';

export class SubscriptionPage {
    readonly page: Page;
    readonly tabAfrique: Locator;
    readonly enSavoirPlusBtn: Locator;
    readonly reserverBtn: Locator;
    
    readonly firstCabine: Locator;
    readonly ajouterCabineBtn: Locator;
    readonly ajouterPanierBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.tabAfrique = page.getByRole('tab', { name: 'AFRIQUE' });
        // On cible le 4ème bouton (index 3) 
        this.enSavoirPlusBtn = page.getByRole('button', { name: 'En savoir plus' });
        this.reserverBtn = page.getByRole('button', { name: 'Réserver' });

        this.firstCabine = page.getByRole('img', { name: 'image-miniature' }).first(); 
        this.ajouterCabineBtn = page.getByRole('button', { name: 'Ajouter une cabine' });
        this.ajouterPanierBtn = page.getByRole('button', { name: 'Ajouter au panier' });
    }

    async selectCruiseAndReserve() {
        await this.tabAfrique.click();
        await this.enSavoirPlusBtn.nth(3).click();
        await this.reserverBtn.click();
    }
    //select cabine 
    async addCabineToPanier() {
        await this.firstCabine.click(); // Click ala first cabine
        await this.ajouterCabineBtn.click(); // Ajouter une cabine
        await this.ajouterPanierBtn.click(); // Ajouter au panier
        /*toast
        // utilisation locator flexible regExp /  toast problematiques de wording
        const toast = this.page.locator('.toast-success, [role="alert"]').filter({ hasText: /ajoutée au panier/i });
        
        // timeout  pour attendre l'affichage du toast 
        await expect(toast).toBeVisible({ timeout: 10000 });
*/
        //ne pas expecter le toast
        await this.page.waitForTimeout(20000);
    }
}