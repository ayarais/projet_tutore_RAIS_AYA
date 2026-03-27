import { test, expect } from '@playwright/test';

test('TC-22: Vérifier la redirection vers la page d inscription', async ({ page }) => {
    // 1. Aller sur la page de login
    await page.goto('/login');

    // 2. Cliquer sur le lien "Créez-en un ici"
    await page.click('a[routerlink="/register"]');

    // 3. Vérifier que l'URL a changé vers /register
    await expect(page).toHaveURL(/.*register/);

    // 4. Vérifier que le titre de la page d'inscription est là
    await expect(page.locator('h1, h2').first()).toBeVisible();
});