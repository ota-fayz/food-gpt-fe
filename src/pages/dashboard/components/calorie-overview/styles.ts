import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";

export const Container = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(3),
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(4),
  minHeight: theme.spacing(25),
}));

export const ChartSection = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
}));

export const CircularProgressContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: theme.spacing(22.5),
  height: theme.spacing(22.5),
}));

export const BackgroundCircularProgress = styled(CircularProgress)(
  ({ theme }) => ({
    color: theme.palette.grey[300],
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
  })
);

export const ProgressCircularProgress = styled(CircularProgress)(
  ({ theme }) => ({
    color: theme.palette.grey[800],
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 2,
    transform: "rotate(-90deg) !important",
    "& .MuiCircularProgress-circle": {
      strokeLinecap: "round",
    },
  })
);

export const ChartContent = styled(Box)(({ theme }) => ({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  gap: theme.spacing(0.5),
  zIndex: 3,
}));

export const CalorieNumber = styled(Box)(({ theme }) => ({
  ...theme.typography.h3,
  color: theme.palette.text.primary,
}));

export const CalorieLabel = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
}));

export const MacroSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  flex: 1,
}));

export const MacroItem = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

export const MacroHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const MacroLabel = styled(Box)(({ theme }) => ({
  ...theme.typography.h6,
  color: theme.palette.text.primary,
}));

export const MacroValue = styled(Box)(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.text.secondary,
}));

export const MacroProgressContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: theme.spacing(1),
}));

export const StyledLinearProgress = styled(LinearProgress)<{
  macroColor: string;
}>(({ theme, macroColor }) => ({
  height: theme.spacing(1.5),
  borderRadius: theme.spacing(0.875),
  backgroundColor: theme.palette.grey[300],
  "& .MuiLinearProgress-bar": {
    backgroundColor: macroColor,
    borderRadius: theme.spacing(0.875),
  },
}));
