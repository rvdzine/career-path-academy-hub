import React from "react";

type Company = {
  name: string;
  fresher: number;
  mid: number;
  senior: number;
  tier: "product" | "tier1" | "tier2";
};

const companyData: Company[] = [
  { name: "Google India", fresher: 60, mid: 150, senior: 400, tier: "product" },
  { name: "Zoho", fresher: 55, mid: 130, senior: 250, tier: "product" },
  { name: "Adobe India", fresher: 45, mid: 100, senior: 270, tier: "product" },
  { name: "Accenture", fresher: 35, mid: 85, senior: 250, tier: "tier1" },
  { name: "Deloitte", fresher: 40, mid: 90, senior: 220, tier: "tier1" },
  { name: "HCL", fresher: 34, mid: 85, senior: 220, tier: "tier2" },
  { name: "TCS", fresher: 32, mid: 80, senior: 210, tier: "tier2" },
  { name: "Wipro", fresher: 30, mid: 75, senior: 200, tier: "tier2" },
  { name: "Publicis Sapient", fresher: 38, mid: 90, senior: 200, tier: "product" },
  { name: "Infosys", fresher: 28, mid: 70, senior: 180, tier: "tier2" },
];

const tierColors: Record<Company["tier"], string> = {
  product: "#6b5bff",
  tier1: "#7b61ff",
  tier2: "#5b9dff",
};

export default function CompanyGrid() {
  const gridContainerStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    padding: "20px",
  };

  const cardStyle: React.CSSProperties = {
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "16px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  };

  const cardHeaderStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
  };

  const tierBadgeStyle = (color: string): React.CSSProperties => ({
    backgroundColor: color,
    color: "#fff",
    borderRadius: "50%",
    width: "32px",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "14px",
  });

  const cardBodyStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  };

  const salaryRowStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
  };

  return (
    <div style={gridContainerStyle}>
      {companyData.map((company) => (
        <div key={company.name} style={cardStyle}>
          <div style={cardHeaderStyle}>
            <h3>{company.name}</h3>
            <span style={tierBadgeStyle(tierColors[company.tier])}>
              {company.name.split(" ")[0][0]}
            </span>
          </div>
          <div style={cardBodyStyle}>
            <div style={salaryRowStyle}>
              <span>Fresher</span>
              <span>₹{company.fresher} K</span>
            </div>
            <div style={salaryRowStyle}>
              <span>Mid-level</span>
              <span>₹{company.mid} K</span>
            </div>
            <div style={salaryRowStyle}>
              <span>Senior</span>
              <span>₹{company.senior} K</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
