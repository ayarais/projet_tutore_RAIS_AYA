import { Page, Locator } from '@playwright/test';
/**
 * Page Object représentant le module de recherche d'OpenCruise.
 * Contient les sélecteurs et les actions liées à la recherche et au filtrage.
 */
export class SearchPage {
    readonly page: Page;
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    // On cible spécifiquement l'onglet (tab) pour éviter l'erreur 
    readonly afriqueTab: Locator;

    constructor(page: Page) {
        this.page = page;
        /* Sélecteur pour le champ de saisie par mot-clé (Combobox)
         el champ "Mots-clés" el navigateur i'fassarha l'Playwright k'enha combobox
        */
        this.searchInput = page.getByRole('combobox', { name: 'Mots-clés' });
        // Bouton pour lancer la recherche
        this.searchButton = page.getByRole('button', { name: 'Rechercher' });
        // Sélecteur précis de l'onglet AFRIQUE via son rôle 'tab' pour éviter l'ambiguïté
        this.afriqueTab = page.getByRole('tab', { name: 'AFRIQUE' });
    }
    /**
     * Effectue une recherche par mot-clé ( "Maroc")
     * @param text Le mot-clé à saisir
     */

    async searchFor(text: string) {
        await this.searchInput.fill(text);
        await this.searchButton.click();
    }

    
     //Filtre les résultats en cliquant sur l'onglet spécifique au continent Afrique

    async selectAfrique() {
        await this.afriqueTab.click();
    }
}