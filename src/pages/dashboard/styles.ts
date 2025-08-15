import { styled } from "@mui/material/styles";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100vh",
  backgroundColor: theme.palette.background.default,
  overflow: "hidden",
  padding: theme.spacing(4),
}));

export const Header = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
}));

export const HeaderActions = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  position: "absolute",
  right: 0,
}));

export const CalendarSection = styled("div")(({ theme }) => ({
  padding: theme.spacing(1, 0),
}));

export const WeekDays = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 0,
  marginBottom: theme.spacing(1),
  width: "100%",
}));

export const DateRow = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(1, 0),
}));

export const MainSection = styled("div")(({ theme }) => ({
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const HistorySection = styled("div")(({ theme }) => ({
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  flex: 1,
  minHeight: "400px",
  maxHeight: "60vh",
  overflowY: "auto",
  WebkitOverflowScrolling: "touch",
  paddingBottom: theme.spacing(10),
  marginTop: theme.spacing(2),
}));
