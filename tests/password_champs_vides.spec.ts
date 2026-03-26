import { test, expect } from '@playwright/test';
import { performLogin } from '../utils/auth';

test('Mot de passe - Cas non passant (Popup)', async ({ page }) => {
    // 1. Connexion 
    await performLogin(page);
    
    // 2. Navigation vers Profil + ouvrir le Popup
    await page.getByRole('button').nth(1).click();
    await page.getByRole('link', { name: /Modifier votre mot de passe/i }).click();

    // 3.  Cliquer sur Enregistrer direct (Formulaire vide)
    // popup prends du temps pour apparaitre , Playwright l attends
    await page.getByRole('button', { name: 'Enregistrer' }).click();

    // 4. verifier le messages d'erreur en rouge
    // utilisation de Regex pour distinguer Majuscule/Minuscule
    await expect(page.getByText(/merci de saisir le mot de passe/i)).toBeVisible({ timeout: 10000 });
    await expect(page.getByText(/Merci de confirmer votre mot de passe/i)).toBeVisible({ timeout: 10000 });

    // 5.  Annuler pour fermer le Popup proprement
    // utilisation du sélecteur spécifique pour le Modal pour ne pas cliquer sur faux profil 
    await page.locator('.modal-content').getByRole('button', { name: 'Annuler' }).click();

    console.log("Test Popup: Messages d'erreur validés avec succès.");
});