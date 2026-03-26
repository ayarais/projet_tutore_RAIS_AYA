import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SearchPage } from '../pages/SearchPage';

test.describe('Module Recherche - OpenCruise', () => {

    test('Validation du moteur de recherche et des filtres par continent', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const searchPage = new SearchPage(page);

        // 1 : Authentification de l'utilisateur
        await loginPage.goto();
        await loginPage.login('eyarayes@protonmail.com', 'Passw0rdAdmin');

        // 2 : Cas de Test - Recherche par mot-clé "Maroc"
        // On vérifie que le moteur de recherche renvoie bien des résultats (bouton En savoir plus visible)
        await searchPage.searchFor('Maroc');
        await expect(page.getByRole('button', { name: 'En savoir plus' }).nth(1)).toBeVisible();

        // 3 : Cas de Test - Filtrage par Continent (AFRIQUE)
        // On vérifie que l'onglet est bien cliquable et devient actif
        await searchPage.selectAfrique();
        
        //on vérifie que l'attribut 'aria-selected' passe à true
        await expect(searchPage.afriqueTab).toHaveAttribute('aria-selected', 'true');
    });

});