import '@testing-library/jest-dom/vitest';

import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

vi.mock("@/api", () => {
    return {
        api: {
            get: vi.fn().mockResolvedValue({ data: [], totalPages: 1 }),
            post: vi.fn().mockResolvedValue({ data: {} }),
            put: vi.fn().mockResolvedValue({ data: {} }),
            delete: vi.fn().mockResolvedValue({}),
        },
    };
});

afterEach(() => {
    cleanup();
});