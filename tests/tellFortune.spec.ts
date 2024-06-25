import { test, expect } from "@playwright/test";
import { tellFortune } from "./tellFortune";

test('should display the correct fortune message', async ({ page }) => {
    page.on('dialog', async dialog => {
        switch (dialog.message()) {
            case 'How many kids do you have?':
                await dialog.accept('2');
                break;
            case "What is your partner's name?":
                await dialog.accept('Alex');
                break;
            case 'What is your country?':
                await dialog.accept('Canada');
                break;
            case 'What is your job position?':
                await dialog.accept('Engineer');
                break;
            default:
                await dialog.dismiss();
                break;
        }
    });

    // await expect().toHaveText(
    //     "Hi! You have 2 kids, your partner's name is Alex, you are located in Canada, and your position is Engineer."
    // );
});