import { test, expect } from '@playwright/test';
import { performLogin } from '../utils/auth';

test('Mot de passe - Validation format et correspondance', async ({ page }) => {
    await performLogin(page);
    await page.getByRole('button').nth(1).click();
    await page.getByRole('link', { name: /Modifier votre mot de passe/i }).click();

    // 1. Action: Saisir des données invalides (pas de chiffres, trop court)
    await page.locator('#user_password').fill('kljhghjnlk');
    await page.locator('input[formcontrolname="confirmPassword"]').fill('mùloikj');

    // 2. Action: Cliquer sur Enregistrer
    await page.getByRole('button', { name: 'Enregistrer' }).click();

    // 3. Assertions: verifier les deux messages d'erreur en rouge
    
    // Message 1: Format invalide
    const formatError = page.getByText(/doit contenir des lettres et des chiffres/i);
    await expect(formatError).toBeVisible({ timeout: 10000 });

    // Message 2: Non identique
    const matchError = page.getByText(/les mots de passe doivent être identiques/i);
    await expect(matchError).toBeVisible({ timeout: 10000 });

    // 4. Annuler pour fermer le modal
    await page.locator('.modal-content').getByRole('button', { name: 'Annuler' }).click();

    console.log("Test Passed: Format et correspondance validés.");
});