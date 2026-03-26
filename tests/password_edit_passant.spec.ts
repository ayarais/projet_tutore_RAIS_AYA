import { test, expect } from '@playwright/test';
import { performLogin } from '../utils/auth';

test('Mot de passe - Cas passant (Succès)', async ({ page }) => {
    await performLogin(page);
    await page.getByRole('button').nth(1).click();
    await page.getByRole('link', { name: /Modifier votre mot de passe/i }).click();

    // 1. Nouveau mot de passe (On utilise l'ID, c'est le plus sûr)
    await page.locator('#user_password').fill('Passw0rdAdmin');

    // 2. Confirmer le mot de passe
    await page.locator('input[formcontrolname="confirmPassword"]').fill('Passw0rdAdmin');

    // 3. Enregistrer
    await page.getByRole('button', { name: 'Enregistrer' }).click();

    // 4. verif  que popup est fermée
    const modal = page.locator('.modal-content');
    await expect(modal).not.toBeVisible({ timeout: 15000 });

    console.log("Test Succès: Mot de passe confirmé et formulaire envoyé.");
});