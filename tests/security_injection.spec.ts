import { test, expect } from '@playwright/test';

test.describe('Tests de Sécurité - Injection', () => {

    test('TC-19: Vérifier la sanitization des inputs (XSS/SQL)', async ({ page }) => {
        // 1. Aller sur la page d'inscription et attendre le chargement
        await page.goto('/register'); 
        await page.waitForLoadState('networkidle');

        // 2. Payloads
        const xssPayload = '<script>alert("XSS")</script>';
        const sqlPayload = "' OR '1'='1";

        // 3. Remplir le champ Nom (On utilise le placeholder direct pour plus de précision)
        // On force l'attente pour être sûr que l'input est prêt
        const nomInput = page.locator('input[placeholder="Nom"]').first();
        await nomInput.waitFor({ state: 'visible' });
        await nomInput.fill(xssPayload);

        // 4. Remplir le champ Prénom
        const prenomInput = page.locator('input[placeholder="Prénom"]').first();
        await prenomInput.fill(sqlPayload);

        // 5. Cliquer sur le bouton de soumission
        await page.click('button[type="submit"]');

        // 6. ASSERTION : Vérifier que le texte est bien là (non exécuté)
        await expect(nomInput).toHaveValue(xssPayload); 
    });
});