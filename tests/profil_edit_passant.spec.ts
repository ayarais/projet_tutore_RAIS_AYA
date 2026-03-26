import { test, expect } from '@playwright/test';
import { performLogin } from '../utils/auth';

test('Profil - Mise à jour sans modifications', async ({ page }) => {
    // 1. Connexion et navigation lel profil
    await performLogin(page);
    
    // cliquer sur icône profil (nth(1) )
    await page.getByRole('button').nth(1).click();

    // 2.  Mettre à jour direct sans rien toucher
    await page.getByRole('button', { name: 'Mettre à jour' }).click();

    // 3.verif si Toastde succès s'affiche
    const successToast = page.locator('.toast-success, .alert-success, [role="alert"]');
    await expect(successToast).toBeVisible({ timeout: 10000 });

    console.log("Test Succès: Mise à jour effectuée sans modif.");
});