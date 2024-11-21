export const mockUsers = [
  {
    name: "Senne",
    email: "senne.decock@hotmail.be",
    password: "a",
    employeeNumber: "E001",
    phoneNumber: "123-456-7890",
    hireDate: "2022-06-15",
    language: "ENGLISH",
  },
  {
    name: "Jan",
    email: "jan.smith@example.com",
    password: "password123",
    employeeNumber: "E002",
    phoneNumber: "987-654-3210",
    hireDate: "2021-09-01",
    language: "FRENCH",
  },
  {
    name: "Lisa",
    email: "lisa.brown@securex.com",
    password: "securex2024",
    employeeNumber: "E003",
    phoneNumber: "456-123-7890",
    hireDate: "2020-03-12",
    language: "DUTCH",
  },
  {
    name: "Tom",
    email: "tom.jones@securex.com",
    password: "password456",
    employeeNumber: "E004",
    phoneNumber: "321-654-9870",
    hireDate: "2019-11-23",
    language: "ENGLISH",
  },
];

export const mockAssets = [
  {
    number: "A001",
    brand: "Apple",
    model: "MacBook Pro",
    serialNumber: "ABC12345",
    purchaseDate: "2023-01-15",
    warrantDate: "2025-01-15",
    comments: "Work laptop for executives",
    status: "IN_USE",
    assignedTo: "Senne",
  },
  {
    number: "A002",
    brand: "HP",
    model: "Spectre x360",
    serialNumber: "XYZ98765",
    purchaseDate: "2023-05-10",
    warrantDate: "2025-05-10",
    comments: "Backup laptop for emergencies",
    status: "NEW",
    assignedTo: null,
  },
  {
    number: "A003",
    brand: "Dell",
    model: "Latitude 5520",
    serialNumber: "DEF67890",
    purchaseDate: "2022-08-20",
    warrantDate: "2024-08-20",
    comments: "Laptop for claims processing",
    status: "IN_USE",
    assignedTo: "Lisa",
  },
  {
    number: "A004",
    brand: "Brother",
    model: "HL-L2350DW",
    serialNumber: "GHI24680",
    purchaseDate: "2021-11-05",
    warrantDate: "2023-11-05",
    comments: "Printer for main office",
    status: "IN_USE",
    assignedTo: "Jan",
  },
  {
    number: "A005",
    brand: "Logitech",
    model: "MX Master 3",
    serialNumber: "JKL98765",
    purchaseDate: "2023-02-01",
    warrantDate: "2024-02-01",
    comments: "Ergonomic mouse for team leaders",
    status: "IN_USE",
    assignedTo: "Tom",
  },
  {
    number: "A006",
    brand: "Samsung",
    model: "Galaxy Tab S8",
    serialNumber: "MNO45678",
    purchaseDate: "2022-04-25",
    warrantDate: "2024-04-25",
    comments: "Tablet for field agents",
    status: "NEW",
    assignedTo: null,
  },
  {
    number: "A007",
    brand: "Canon",
    model: "EOS M50",
    serialNumber: "PQR12389",
    purchaseDate: "2021-06-10",
    warrantDate: "2023-06-10",
    comments: "Camera for marketing team",
    status: "IN_USE",
    assignedTo: "Lisa",
  },
  {
    number: "A008",
    brand: "Microsoft",
    model: "Surface Pro 9",
    serialNumber: "STU89012",
    purchaseDate: "2023-07-15",
    warrantDate: "2025-07-15",
    comments: "High-performance tablet for presentations",
    status: "NEW",
    assignedTo: null,
  },
];

export const mockAssetHistory = [
  {
    assetNumber: "A001",
    startDate: "2023-01-15",
    endDate: "2025-01-15",
  },
  {
    assetNumber: "A002",
    startDate: null,
    endDate: null,
  },
  {
    assetNumber: "A003",
    startDate: "2022-08-20",
    endDate: null,
  },
  {
    assetNumber: "A004",
    startDate: "2021-11-05",
    endDate: null,
  },
  {
    assetNumber: "A005",
    startDate: "2023-02-01",
    endDate: null,
  },
  {
    assetNumber: "A006",
    startDate: null,
    endDate: null,
  },
  {
    assetNumber: "A007",
    startDate: "2021-06-10",
    endDate: null,
  },
  {
    assetNumber: "A008",
    startDate: null,
    endDate: null,
  },
];
