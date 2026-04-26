# Local Development Setup

## Prerequisites
- .NET 8 SDK
- SQL Server (local or Docker)
- Node.js 18+ (for the Angular client)

## Configuration

### 1. Create appsettings.Development.json
Copy the template and add your local configuration:
```bash
cp API/appsettings.Development.template.json API/appsettings.Development.json
```

Then edit `API/appsettings.Development.json` and replace `YOUR_PASSWORD_HERE` with your actual SQL Server password.

### 2. Database Setup
```bash
dotnet ef database update
```

### 3. Run the API
```bash
cd API
dotnet run
```

### 4. Run the Client
```bash
cd client
npm install
npm start
```

## Important Security Notes
- Never commit `appsettings.Development.json` to version control
- Never commit SSL certificates or private keys
- Always use `.template` files for configuration examples
- See `.gitignore` for which files are protected
