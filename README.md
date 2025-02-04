# 🚀 Interactive Frontend Dashboard

A modern, interactive dashboard built with Next.js 15, featuring multiple data visualization components and real-time data fetching capabilities.

## ✨ Features

- 🔐 Secure authentication system
- 📊 Interactive data visualizations using Recharts
- 🎯 Multiple data sources integration (REST APIs & SQL Database)
- 💅 Modern UI with Tailwind CSS and shadcn/ui
- 🔄 Real-time data updates with TanStack Query
- 🗃️ Supabase database integration

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Charts:** Recharts
- **Icons:** Lucide React
- **State Management:** TanStack Query
- **Database:** Supabase
- **Data Fetching:** Server Actions

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Supabase account
- Active internet connection for API access

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone 'https://github.com/dontforgetsemicologne/salesway'
   cd salesway
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_API_BASE_URL=http://3.111.196.92:8020
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## 🏗️ Project Structure

```
├── app/
│   ├── (auth)/
│   │   └── page.tsx
│   ├── dashboard/
│   │   └── page.tsx
│   └── layout.tsx
├── components/
│   └── ui/
├── lib/
├── hooks/
└── utils/
```

## 🔑 Authentication

The application includes a custom login page with the following credentials:
- Username: `trial`
- Password: `assignment123`

## 📊 Data Components

### Component Details

1. **Component 1**
   - Data Source: REST API
   - Endpoint: `api/v1/sample_assignment_api_1/`
   - Authentication Required: Yes

2. **Component 2**
   - Data Source: SQL Database (Supabase)
   - Table: `2`

3. **Component 3**
   - Data Source: REST API
   - Endpoint: `api/v1/sample_assignment_api_3/`
   - Authentication Required: Yes

4. **Component 4**
   - Data Source: SQL Database (Supabase)
   - Table: `4`

5. **Component 5**
   - Data Source: REST API
   - Endpoint: `api/v1/sample_assignment_api_5/`
   - Authentication Required: Yes

6. **Component 6**
   - Data Source: SQL Database (Supabase)
   - Table: `6`

## 🔄 Data Fetching

### Server Actions
```typescript
// Example of a server action
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
```

### Client-Side Fetching
```typescript
// Example of TanStack Query usage
const { data, isLoading, error } = useQuery({
  queryKey: ['component', id],
  queryFn: () => fetchComponentData(id),
  enabled: isLoggedIn,
});
```

## 🎨 Styling Guidelines

- Using Tailwind CSS utility classes
- shadcn/ui components for consistent UI
- Responsive design patterns
- Dark mode support

## 📚 API Documentation

Swagger documentation is available for testing the APIs. Make sure to include the authentication headers:

```javascript
headers: {
  'Authorization': 'Basic ' + btoa('trial:assignment123')
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- shadcn/ui for the beautiful components
- Recharts for the charting library
- Supabase for the backend services