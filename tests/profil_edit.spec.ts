import { test, expect } from '@playwright/test';
import { performLogin } from '../utils/auth'; // Import de la fonction auth

test('Mise à jour du profil - Succès', async ({ page }) => {
  // 1. Connexion en utilisant la fonction utilitaire
  await performLogin(page);

  // 2. Accès au profil
  await page.locator('app-main-nav .btn').filter({ has: page.locator('svg') }).nth(1).click();

  // 3. Modif de la Date de naissance
  const dateInput = page.locator('input[formcontrolname="dateNaissance"]');
  // "waitFor" pour verifier que l input est affiché avant de le remplir
  await dateInput.waitFor({ state: 'visible' }); 
  await dateInput.fill('1999-05-22');

  // 4. Click Mettre à jour
  await page.getByRole('button', { name: 'Mettre à jour' }).click();

  // 5. Assertion
  await expect(dateInput).toHaveValue('1999-05-22');
});