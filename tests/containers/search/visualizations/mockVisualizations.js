export const spendingByCategory = {
    page_metadata: {
        page: 1,
        has_next_page: false,
        has_previous_page: false,
        next: null,
        previous: null
    },
    results: [
        {
            treasury_account__budget_function_title: 'First Budget Function',
            aggregate: '456'
        },
        {
            treasury_account__budget_function_title: 'Second Budget Function',
            aggregate: '123'
        }
    ]
};

export const geo = {
    results: [
        {
            item: 'AK',
            aggregate: '123.12'
        },
        {
            item: 'AL',
            aggregate: '345.56'
        }
    ],
    total_metadata: {
        count: 2
    },
    page_metadata: {
        page_number: 1,
        count: 2,
        num_pages: 1
    }
};

export const industryCode = {
    page_metadata: {
        page: 1,
        has_next_page: false,
        has_previous_page: false,
        next: null,
        previous: null
    },
    results: [
        {
            item: '1234',
            aggregate: '500.00',
            contract_data__product_or_service_code: '1234'
        },
        {
            item: '2345',
            aggregate: '400.01',
            contract_data__product_or_service_code: '2345'
        }
    ]
}