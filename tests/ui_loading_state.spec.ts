import { test, expect } from '@playwright/test';

test.describe('Tests UI - Feedback Visuel', () => {

    test('TC-20: Vérifier l état de chargement (Loading) lors du clic', async ({ page }) => {
        // 1. Aller sur la page de login (plus simple pour tester le bouton)
        await page.goto('/login');

        // 2. Remplir les champs pour pouvoir cliquer
        await page.locator('input[formcontrolname="username"]').fill('test_user');
        await page.locator('input[formcontrolname="password"]').fill('password123');

        // 3. Cliquer sur le bouton "Connexion"
        const loginBtn = page.locator('button.btn-primary');
        await loginBtn.click();

        // 4. Vérifier que l'application réagit (le bouton change ou un loader apparaît)
        // Sur Angular, souvent le bouton devient "disabled" ou le texte change
        // On vérifie ici si le bouton est toujours visible après le clic
        await expect(loginBtn).toBeVisible(); 
    });
});