import { test, expect, request } from '@playwright/test';
import Ajv from 'ajv';

const endpoint = 'https://fakestoreapi.com/products/1';

const productSchema = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    title: { type: 'string' },
    price: { type: 'number' },
    category: { type: 'string' },
    description: { type: 'string' },
  },
  required: ['id', 'title', 'price', 'category', 'description'],
};

test('GET product details and validate response', async () => {
  const apiRequest = await request.newContext();
  const response = await apiRequest.get(endpoint);

  // Verify status
  expect(response.status()).toBe(200);

  const data = await response.json();

  // Validate keys
  expect(data).toHaveProperty('id');
  expect(data).toHaveProperty('title');
  expect(data).toHaveProperty('price');
  expect(data).toHaveProperty('category');
  expect(data).toHaveProperty('description');

  // Validate schema
  const ajv = new Ajv();
  const validate = ajv.compile(productSchema);
  expect(validate(data)).toBe(true);

  // Additional validations
  expect(typeof data.id).toBe('number');
  expect(data.id).toBe(1); // id should match endpoint
  expect(typeof data.title).toBe('string');
  expect(data.title.length).toBeGreaterThan(0); // title should not be empty
  expect(typeof data.price).toBe('number');
  expect(data.price).toBeGreaterThan(0); // price should be positive
  expect(typeof data.category).toBe('string');
  expect(['electronics', 'jewelery', "men's clothing", "women's clothing"]).toContain(data.category); // category should be valid
  expect(typeof data.description).toBe('string');
  expect(data.description.length).toBeGreaterThan(10); // description should be reasonably long

  // Log product title and price
  console.log('Product Title:', data.title);
  console.log('Product Price:', data.price);
});
