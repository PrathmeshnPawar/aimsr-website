# Stage 1: Build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copy the project file and restore dependencies
COPY backend.csproj ./
RUN dotnet restore

# Copy the rest of the application
COPY . ./

# Build and publish the application
RUN dotnet build --configuration Release --no-restore
RUN dotnet publish -c Release -o /out --no-restore

# Stage 2: Runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app

# Copy the built application from the build stage
COPY --from=build /out ./

# Expose ports
EXPOSE 5000 5001

# Run the application
ENTRYPOINT ["dotnet", "backend.dll"]
