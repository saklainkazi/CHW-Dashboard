// Dummy data used across the app

export const analytics = {
  kpis: {
    totalPatients: 1248,
    activeCases: 198,
    resolvedCases: 1024,
    urgentCases: 26,
  },
  patientsPerMonth: [
    { month: "Jan", patients: 80 },
    { month: "Feb", patients: 95 },
    { month: "Mar", patients: 110 },
    { month: "Apr", patients: 105 },
    { month: "May", patients: 125 },
    { month: "Jun", patients: 140 },
    { month: "Jul", patients: 160 },
    { month: "Aug", patients: 155 },
    { month: "Sep", patients: 178 },
    { month: "Oct", patients: 190 },
    { month: "Nov", patients: 210 },
    { month: "Dec", patients: 220 },
  ],
  activeResolvedTrends: [
    { month: "Jan", active: 40, resolved: 60 },
    { month: "Feb", active: 45, resolved: 50 },
    { month: "Mar", active: 55, resolved: 65 },
    { month: "Apr", active: 50, resolved: 55 },
    { month: "May", active: 60, resolved: 65 },
    { month: "Jun", active: 75, resolved: 65 },
    { month: "Jul", active: 80, resolved: 80 },
    { month: "Aug", active: 78, resolved: 77 },
    { month: "Sep", active: 85, resolved: 93 },
  ],
  diseaseDistribution: [
    { name: "Diabetes", value: 400 },
    { name: "Hypertension", value: 300 },
    { name: "Respiratory", value: 200 },
    { name: "Infectious", value: 150 },
    { name: "Others", value: 198 },
  ],
};

export const patients = [
  {
    id: "P-1001",
    name: "Asha R.",
    age: 45,
    condition: "Diabetes",
    lastVisit: "2025-09-05",
    status: "Active",
    notes: "Metformin recommended. Monitor HbA1c.",
    vitals: { bp: "130/85", hr: 78, temp: 98.2 },
    history: [
      { date: "2025-09-05", text: "Monthly check - glucose slightly high." },
      { date: "2025-06-12", text: "Prescribed medicines." },
    ],
  },
  {
    id: "P-1002",
    name: "Rahul S.",
    age: 30,
    condition: "Hypertension",
    lastVisit: "2025-08-20",
    status: "Resolved",
    notes: "BP stabilized, continue lifestyle changes.",
    vitals: { bp: "120/78", hr: 72, temp: 98.6 },
    history: [
      { date: "2025-08-20", text: "BP normal. Reduce salt intake." },
      { date: "2025-03-11", text: "Started ACE inhibitor." },
    ],
  },
  {
    id: "P-1003",
    name: "Neha P.",
    age: 57,
    condition: "Respiratory",
    lastVisit: "2025-09-10",
    status: "Urgent",
    notes: "Shortness of breath — schedule CT.",
    vitals: { bp: "140/90", hr: 95, temp: 99.1 },
    history: [
      { date: "2025-09-10", text: "Acute episode. Referred for imaging." },
      { date: "2025-02-04", text: "Chronic bronchitis." },
    ],
  },
  // add more entries if you'd like...
];
