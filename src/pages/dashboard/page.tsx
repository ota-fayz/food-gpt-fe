import { withAuthGate } from "../../hoc/withAuthGate";
import { Dashboard } from "./Dashboard";

const DashboardPage = withAuthGate(Dashboard);
export default DashboardPage;
