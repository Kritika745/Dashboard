// Mock API functions 
export const fetchUsers = async () => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Mock user data
  return [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "admin",
      department: "Engineering",
      status: "active",
      lastActive: "2 hours ago",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "user",
      department: "Marketing",
      status: "active",
      lastActive: "1 day ago",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike.johnson@example.com",
      role: "manager",
      department: "Sales",
      status: "inactive",
      lastActive: "1 week ago",
    },
    {
      id: 4,
      name: "Sarah Wilson",
      email: "sarah.wilson@example.com",
      role: "user",
      department: "HR",
      status: "active",
      lastActive: "3 hours ago",
    },
    {
      id: 5,
      name: "David Brown",
      email: "david.brown@example.com",
      role: "user",
      department: "Finance",
      status: "active",
      lastActive: "5 minutes ago",
    },
    {
      id: 6,
      name: "Lisa Davis",
      email: "lisa.davis@example.com",
      role: "manager",
      department: "Engineering",
      status: "active",
      lastActive: "1 hour ago",
    },
    {
      id: 7,
      name: "Tom Anderson",
      email: "tom.anderson@example.com",
      role: "user",
      department: "Marketing",
      status: "inactive",
      lastActive: "2 weeks ago",
    },
    {
      id: 8,
      name: "Emily Taylor",
      email: "emily.taylor@example.com",
      role: "user",
      department: "Sales",
      status: "active",
      lastActive: "30 minutes ago",
    },
  ]
}

export const authenticateUser = async (email, password) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Mock authentication
  if (email === "admin@example.com" && password === "password") {
    return {
      success: true,
      user: {
        id: 1,
        name: "Admin User",
        email: "admin@example.com",
        role: "admin",
      },
      token: "mock-jwt-token",
    }
  }

  return {
    success: false,
    error: "Invalid credentials",
  }
}
