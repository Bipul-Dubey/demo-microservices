# Build stage
FROM golang:1.25-alpine AS builder

WORKDIR /app

# Copy Go module files
COPY states-service/go.mod .
COPY states-service/go.sum .

RUN go mod download

# Copy the actual service code
COPY states-service/ .

RUN go build -o states-service

# Run stage
FROM alpine:3.18
WORKDIR /app

COPY --from=builder /app/states-service .

EXPOSE 3000

CMD ["./states-service"]
