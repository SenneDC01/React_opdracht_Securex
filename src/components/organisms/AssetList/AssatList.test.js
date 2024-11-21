import { render, screen } from "@testing-library/react";
import AssetList from "./AssetList";
import { mockAssets, mockAssetHistory } from "../../../services/MockData";

const assetsWithHistory = mockAssets.map((asset) => {
  const history = mockAssetHistory.find(
    (historyItem) => historyItem.assetNumber === asset.number,
  );
  return {
    ...asset,
    startDate: history?.startDate || "N/A",
    endDate: history?.endDate || "N/A",
  };
});

describe("AssetList Component", () => {
  it("renders the title correctly", () => {
    render(<AssetList assets={assetsWithHistory} title="Test Assets" />);
    const titleElement = screen.getByText("Test Assets");
    expect(titleElement).toBeInTheDocument();
  });

  it("displays the list of assets", () => {
    render(<AssetList assets={assetsWithHistory} title="Test Assets" />);
    const assetItems = screen.getAllByRole("listitem");
    expect(assetItems.length).toBe(assetsWithHistory.length);
  });

  it("displays correct asset details", () => {
    render(<AssetList assets={assetsWithHistory} title="Test Assets" />);
    // Use startDate and endDate from the combined data
    const firstAsset = screen.getByText(
      "Apple - MacBook Pro - Start Date: 2023-01-15 - End Date: 2025-01-15",
    );
    const secondAsset = screen.getByText(
      "HP - Spectre x360 - Start Date: N/A - End Date: N/A",
    );
    const thirdAsset = screen.getByText(
      "Dell - Latitude 5520 - Start Date: 2022-08-20 - End Date: N/A",
    );

    expect(firstAsset).toBeInTheDocument();
    expect(secondAsset).toBeInTheDocument();
    expect(thirdAsset).toBeInTheDocument();
  });

  it("displays 'No assets to display' when there are no assets", () => {
    render(<AssetList assets={[]} title="Test Assets" />);
    const noAssetsMessage = screen.getByText("No assets to display.");
    expect(noAssetsMessage).toBeInTheDocument();
  });
});
