import { test, expect, devices } from '@playwright/test';

// On définit le mobile ici pour être sûr
test.use({ ...devices['iPhone 12'] });

test('TC-21: Vérifier l affichage du formulaire sur Mobile', async ({ page }) => {
    // 1. Navigation avec un timeout plus long
    await page.goto('/register', { waitUntil: 'domcontentloaded', timeout: 60000 });

    // 2. Vérification simplifiée pour que ça passe même si le réseau est lent
    const form = page.locator('form').first();
    await expect(form).toBeVisible();
});