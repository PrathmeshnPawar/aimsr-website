# AIMSR Website (In development)

## Overview
This is a project for **Aditya Institute of Management Studies and Research (AIMSR)**. The project is built using **Next.js** for the frontend and **.NET Web API** for the backend, with **PostgreSQL** as the database.

## Tech Stack
- **Frontend**: Next.js (App Router, Client Components)
- **Backend**: .NET Web API 
- **Database**: PostgreSQL
- **Deployment**: Docker

## Features
- Responsive and modern UI
- Authentication & Authorization (JWT, Google, GitHub OAuth)
- Course and faculty details management
- Event and announcement updates
- Contact and inquiry forms

## Setup Instructions
### Prerequisites
Ensure you have the following installed:
- Node.js
- .NET SDK
- PostgreSQL
- Docker (optional for containerized deployment)

### Clone the Repository
```sh
git clone https://github.com/yourusername/aimsr-website.git
cd aimsr-website
```

### Frontend Setup
```sh
cd frontend
npm install
npm run dev
```
The frontend will be available at `http://localhost:3000`.

### Backend Setup
```sh
cd backend
dotnet restore
dotnet run
```
The backend API will be available at `http://localhost:5000`.

### Database Setup
1. Create a PostgreSQL database.
2. Configure the connection string in the `.env` file.
3. Apply migrations:
   ```sh
   dotnet ef database update
   ```

## Deployment
To deploy the project using Docker:
```sh
docker-compose up --build
```

## Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

## License
This project is licensed under the MIT License.

## Contact
For any queries, reach out via [your email] or open an issue in the repository.

