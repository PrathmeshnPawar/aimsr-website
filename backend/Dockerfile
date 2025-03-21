# Use the .NET SDK image for building
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Install dotnet-ef globally and set PATH
RUN dotnet tool install --global dotnet-ef
ENV PATH="$PATH:/root/.dotnet/tools"

# Copy and restore dependencies
COPY *.csproj ./
RUN dotnet restore

# Copy the rest of the source and build
COPY . ./
RUN dotnet publish -c Release -o /app/out

# Use runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/out .

# Set PATH for the runtime image as well
ENV PATH="$PATH:/root/.dotnet/tools"

# Expose ports
EXPOSE 5000 5001

# Run the application
CMD ["dotnet", "backend.dll", "--urls", "http://0.0.0.0:5000;https://0.0.0.0:5001"]
