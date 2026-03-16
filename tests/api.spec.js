import {test,expect} from '@playwright/test';
import { Http2ServerResponse } from 'http2';

test("Test API - Get single item", async({request}) => {
    const response = await request.get('/api/index.php?endpoint=products&id=3');

    expect(response.status()).toBe(200);

    expect(await response.text()).toContain("{\"id\":3,\"name\":\"Peleryna Maskująca\",\"price\":349,\"currency\":\"PLN\",\"display_price\":\"349.00 zł\"}");
})

test('Test API - POST', async ({ request }) => {

    const response = await request.post('/api/index.php?endpoint=products', {
        data: {
            "name": "Testowy produkt",
            "price": 777,
            "currency": "EUR"
        }
    });

    expect(response.status()).toBe(201);
    expect(response.ok()).toBeTruthy();

    const bodyJson = await response.json();
    console.log(bodyJson.product.id)

})