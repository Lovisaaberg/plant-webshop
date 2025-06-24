import { NavigationRow } from "../components/NavigationRow"

export const PlantcarePage = () => {
  return (
    <div>
      <NavigationRow links={[{ text: "Plant care tips", to: "/plantcare" }]} />
      {/* Content for PlantcarePage can be added here */}
      PlantcarePage
    </div>
  )
}
