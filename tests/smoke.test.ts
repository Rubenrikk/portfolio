import { describe, expect, it } from 'vitest';

describe('smoke', () => {
  it('runs Vitest so CI test job is substantive', () => {
    expect(process.version).toMatch(/^v\d+\./);
  });
});
