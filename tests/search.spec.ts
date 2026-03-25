import { test, expect } from '@playwright/test';
import { performLogin } from '../utils/auth'; //optimisation du code login declarée dans le dossier utiles
import { SearchPage } from '../pages/SearchPage';

test.describe('Module Recherche - OpenCruise', () => {
    let searchPage: SearchPage;

        // 1 : Authentification de l'utilisateur
    test.beforeEach(async ({ page }) => {
            await performLogin(page);
            searchPage = new SearchPage(page);
    });
    
test('Validation du moteur de recherche et des filtres par continent', async ({ page }) => {
        // 2 : Cas de Test - Recherche par mot-clé "Maroc"
        await searchPage.searchFor('Maroc');
        await expect(page.getByRole('button', { name: 'En savoir plus' }).nth(1)).toBeVisible();

        // 3 : Cas de Test - Filtrage par Continent (AFRIQUE)
        await searchPage.selectAfrique();
        
        // On vérifie que l'attribut 'aria-selected' passe à true
        await expect(searchPage.afriqueTab).toHaveAttribute('aria-selected', 'true');
    });

});