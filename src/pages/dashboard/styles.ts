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

export const TimeDisplay = styled("div")(({ theme }) => ({
  fontSize: "26.9px",
  fontWeight: 600,
  color: theme.palette.text.primary,
  lineHeight: 1.21,
}));

export const HeaderIcons = styled("div")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  alignItems: "center",
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

export const DateItem = styled("div")<{ isActive?: boolean }>(
  ({ isActive, theme }) => ({
    fontSize: "20px",
    fontWeight: isActive ? 500 : 400,
    color: isActive ? theme.palette.grey[400] : theme.palette.text.primary,
    textAlign: "center",
    minWidth: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: isActive ? "26px" : "0",
    backgroundColor: isActive ? theme.palette.grey[200] : "transparent",
    lineHeight: 1.21,
  })
);

export const MainSection = styled("div")(({ theme }) => ({
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const CalorieCard = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: "12px",
  padding: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  minHeight: "200px",
}));

export const CalorieNumber = styled("div")(({ theme }) => ({
  fontSize: "43.4px",
  fontWeight: 600,
  color: theme.palette.text.primary,
  lineHeight: 1.21,
  marginBottom: theme.spacing(1),
}));

export const CalorieLabel = styled("div")(({ theme }) => ({
  fontSize: "15.4px",
  color: theme.palette.text.secondary,
  lineHeight: 1.21,
  marginBottom: theme.spacing(2),
}));

export const CalorieAddition = styled("div")(({ theme }) => ({
  fontSize: "18px",
  color: theme.palette.text.secondary,
  lineHeight: 1.21,
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0.5),
}));

export const MacroSection = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: 0,
}));

export const MacroItem = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

export const MacroHeader = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const MacroLabel = styled("div")(({ theme }) => ({
  fontSize: "19px",
  fontWeight: 500,
  color: theme.palette.text.primary,
  lineHeight: 1.21,
}));

export const MacroValue = styled("div")(({ theme }) => ({
  fontSize: "15.7px",
  color: theme.palette.text.secondary,
  lineHeight: 1.21,
}));

export const MacroProgressBar = styled("div")(({ theme }) => ({
  width: "100%",
  height: "14px",
  backgroundColor: theme.palette.grey[200],
  borderRadius: "7px",
  overflow: "hidden",
}));

export const MacroProgress = styled("div")<{ width: number; color: string }>(
  ({ width, color }) => ({
    width: `${width}%`,
    height: "100%",
    backgroundColor: color,
    transition: "width 0.3s ease",
  })
);

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

export const ActivityCard = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: "22px",
  border: `1px solid ${theme.palette.grey[200]}`,
  padding: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

export const ActivityIcon = styled("div")(({ theme }) => ({
  width: "110px",
  height: "109px",
  borderRadius: "8px",
  backgroundColor: theme.palette.grey[100],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
}));

export const ActivityContent = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.5),
}));

export const ActivityName = styled("div")(({ theme }) => ({
  fontSize: "18.4px",
  color: theme.palette.text.secondary,
  lineHeight: 1.21,
}));

export const ActivityCalories = styled("div")(({ theme }) => ({
  fontSize: "24.2px",
  fontWeight: 500,
  color: theme.palette.text.primary,
  lineHeight: 1.21,
}));

export const ActivityDuration = styled("div")(({ theme }) => ({
  fontSize: "18.5px",
  color: theme.palette.text.secondary,
  lineHeight: 1.21,
}));

export const ActivityTime = styled("div")(({ theme }) => ({
  fontSize: "16.2px",
  color: theme.palette.grey[400],
  lineHeight: 1.21,
  alignSelf: "flex-start",
}));
