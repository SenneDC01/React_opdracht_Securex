import React, { useState } from "react";
import { useAuth } from "../../services/AuthContext";
import {
  mockAssets,
  mockUsers,
  mockAssetHistory as initialHistory,
} from "../../services/MockData";
import { useNavigate } from "react-router-dom";
import Title from "../../components/atoms/Title/Title";
import BoldSubTitle from "../../components/atoms/SubTitle/SubTitle";
import Button from "../../components/atoms/Button/Button";
import AssetList from "../../components/organisms/AssetList/AssetList";
import AssetAssignmentDropdown from "../../components/molecules/Dropdown/Dropdown";

const mergeAssetsWithHistory = (assets, history) => {
  return assets.map((asset) => {
    const historyEntry = history.find(
      (entry) => entry.assetNumber === asset.number,
    );
    return {
      ...asset,
      startDate: historyEntry?.startDate || "N/A",
      endDate: historyEntry?.endDate || "N/A",
    };
  });
};

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [assetHistory, setAssetHistory] = useState(initialHistory);
  const [assets, setAssets] = useState(
    mergeAssetsWithHistory(mockAssets, initialHistory),
  );
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState("");

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const userAssets = assets.filter((asset) => asset.assignedTo === user.name);
  const unassignedAssets = assets.filter((asset) => asset.assignedTo === null);

  const assignAsset = () => {
    if (!selectedAsset || !selectedEmployee) {
      alert("Please select an asset and an employee.");
      return;
    }

    const currentDate = new Date();
    const startDate = currentDate.toISOString().split("T")[0];
    const endDate = new Date(
      currentDate.setFullYear(currentDate.getFullYear() + 4),
    )
      .toISOString()
      .split("T")[0];

    const updatedHistory = assetHistory.map((entry) =>
      entry.assetNumber === selectedAsset
        ? { ...entry, startDate, endDate }
        : entry,
    );
    const isNewHistoryEntry = !updatedHistory.find(
      (entry) => entry.assetNumber === selectedAsset,
    );
    if (isNewHistoryEntry) {
      updatedHistory.push({ assetNumber: selectedAsset, startDate, endDate });
    }

    setAssetHistory(updatedHistory);

    const updatedAssets = assets.map((asset) =>
      asset.number === selectedAsset
        ? { ...asset, assignedTo: selectedEmployee }
        : asset,
    );
    setAssets(mergeAssetsWithHistory(updatedAssets, updatedHistory));

    alert(`Asset ${selectedAsset} assigned to ${selectedEmployee}`);
    setSelectedAsset(null);
    setSelectedEmployee("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="p-8 bg-white rounded-md shadow-md min-w-xl">
        <div className="flex items-center justify-between mb-6">
          <Title children={`Profile: ${user.name}`} />
          <Button onClick={handleLogout} color="red" children="Logout" />
        </div>

        <AssetList assets={userAssets} title="Your Assets" />

        <BoldSubTitle children="Assign Assets" />
        <div className="flex flex-col">
          <AssetAssignmentDropdown
            label="Select an Asset"
            options={unassignedAssets.map((asset) => ({
              value: asset.number,
              label: `${asset.brand} - ${asset.model}`,
            }))}
            value={selectedAsset}
            onChange={setSelectedAsset}
          />
          <AssetAssignmentDropdown
            label="Select an Employee"
            options={mockUsers.map((user) => ({
              value: user.name,
              label: user.name,
            }))}
            value={selectedEmployee}
            onChange={setSelectedEmployee}
          />
          <Button onClick={assignAsset} children="Assign Asset" color="blue" />
        </div>
      </div>
    </div>
  );
}
