
# Full-Stack Inventory Management Dashboard

A complete **Inventory Management Dashboard** built with modern technologies for the frontend, backend, and deployment. This application provides an efficient and seamless interface for managing inventory data, supported by robust backend services and deployed on AWS.

## 🛠️ Tech Stack

### Frontend:
- **Next.js**: React framework for server-side rendering and routing.
- **Tailwind CSS**: Utility-first CSS framework for fast and responsive UI design.
- **Material UI Data Grid**: Advanced data table functionality for efficient data handling.
- **Redux Toolkit**: State management with minimal boilerplate.
- **Redux Toolkit Query (RTK Query)**: Simplified data fetching and caching.

### Backend:
- **Node.js**: JavaScript runtime for backend services.
- **Prisma**: ORM for seamless database interactions.
- **RESTful APIs**: APIs for communication between frontend and backend.

### Cloud & Deployment:
- **AWS Services**:
  - **RDS**: Managed relational database for storing inventory data.
  - **EC2**: Virtual servers for backend deployment.
  - **API Gateway**: Secure and scalable API endpoints.
  - **Amplify**: Simplified frontend hosting and deployment.
  - **S3**: Storage for static assets.
- **Networking Fundamentals**: Configuring VPC, subnets, and security groups for secure and scalable networking.

---

## 🚀 Features

1. **Inventory Management**: View, add, update, and delete inventory items seamlessly.
2. **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.
3. **Data Visualization**: Interactive tables and charts for data representation.
4. **State Management**: Simplified and efficient state handling with Redux.
5. **AWS Deployment**: End-to-end cloud integration for scalable hosting and database management.

---

## 📦 Getting Started

### Prerequisites:
- Node.js: `>=16.x`
- AWS Account
- Prisma CLI: `npm install prisma --save-dev`

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/inventory-dashboard.git
   cd inventory-dashboard
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Setup Environment Variables**:
   Create a `.env` file in the root directory and add:
   ```env
   DATABASE_URL="your-aws-rds-database-url"
   NEXT_PUBLIC_API_URL="your-api-gateway-url"
   AWS_REGION="your-aws-region"
   ```

4. **Setup Prisma**:
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Run the Application**:
   ```bash
   npm run dev
   ```

### Backend:
- Navigate to the `/backend` folder for backend setup instructions.

---

## 📚 AWS Services Integration

### AWS Setup Guide:
1. **RDS**: Configure and deploy a managed PostgreSQL database.
2. **EC2**: Launch an EC2 instance and deploy the backend.
3. **S3**: Create an S3 bucket for storing static files.
4. **API Gateway**: Securely expose backend APIs.

---

## 🛠️ Deployment

### Frontend Deployment:
Deploy the Next.js application using AWS Amplify:
```bash
amplify init
amplify add hosting
amplify publish
```

### Backend Deployment:
Host the Node.js backend on AWS EC2. Use the following commands:
```bash
scp -i key.pem your-backend-folder.zip ec2-user@your-ec2-ip:/home/ec2-user
```
Follow AWS documentation for setting up and running the backend on EC2.

---

## 🤝 Contribution

Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature-name`.
3. Commit changes: `git commit -m "Add your message"`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a Pull Request.

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🌐 Connect with Me

- **GitHub**:([https://github.com/yourusername](https://github.com/MohamedAbdelaziz19))
- **LinkedIn**: ([https://linkedin.com/in/yourprofile](https://www.linkedin.com/in/abdelaziz-maaref-86863023b/))


---
