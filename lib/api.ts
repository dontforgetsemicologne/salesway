'use server'

async function fetchAPI(endpoint: string) {
    const response = await fetch(`${process.env.API_URL}/${endpoint}`, {
        method: 'GET',
        headers: {
            Authorization: `Basic ${btoa(`${process.env.AUTH_USERNAME}:${process.env.AUTH_PASSWORD}`)}`
        },
        cache: 'no-cache',
    });

    if(!response.ok) {
        throw new Error('Failed to fetch data');
    }

    return response.json();
}

export async function fetchComponentData(componentId: number) {
    const endpoints = `api/v1/sample_assignment_api_${componentId}`;

    if(!endpoints) throw new Error('Invalid component ID');
    
    return fetchAPI(endpoints);
}