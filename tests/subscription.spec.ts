import { test, expect } from '@playwright/test';
import { performLogin } from '../utils/auth';

test('User can reserve a cruise in Africa', async ({ page }) => {
    // 1. Login 
    await performLogin(page);

    // 2. Navigation (Force click pur eviter le random )
    await page.getByRole('tab', { name: 'AFRIQUE' }).click({ force: true });
    
    // 3. Sélection (On attend que l'élément soit là)
    const enSavoirPlus = page.getByRole('button', { name: 'En savoir plus' }).nth(3);
    await enSavoirPlus.waitFor({ state: 'visible' });
    await enSavoirPlus.click();

    await page.getByRole('button', { name: 'Réserver' }).click();

    // 4. FIX EL ASSERTION HOUNI:
    //  capture verif URL est /reservation/... pas /detail
    await page.waitForURL(/.*reservation/); 
    await expect(page).toHaveURL(/.*reservation/, { timeout: 10000 });
    
    console.log("Subscription Tunnel Succès !");
});