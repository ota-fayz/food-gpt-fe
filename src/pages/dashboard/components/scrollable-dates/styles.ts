import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const DATE_ITEM_SIZE = 5;
const ACTIVE_BORDER_RADIUS = 26;
const TODAY_INDICATOR_SIZE = 6;
const FUTURE_OPACITY = 0.3;

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: 0,
  gap: theme.spacing(0.5),
}));

interface DateItemProps {
  isActive?: boolean;
  isToday?: boolean;
  isFuture?: boolean;
}

export const DateItem = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "isActive" && prop !== "isToday" && prop !== "isFuture",
})<DateItemProps>(({ theme, isActive, isToday, isFuture }) => ({
  ...theme.typography.h6,
  textAlign: "center" as const,
  minWidth: theme.spacing(DATE_ITEM_SIZE),
  height: theme.spacing(DATE_ITEM_SIZE),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: theme.transitions.create(["all"], {
    duration: theme.transitions.duration.short,
  }),
  userSelect: "none" as const,
  flex: "1 0 auto",
  position: "relative" as const,
  fontWeight: isActive
    ? theme.typography.fontWeightMedium
    : theme.typography.fontWeightRegular,
  color: isActive
    ? theme.palette.text.primary
    : isFuture
    ? theme.palette.text.disabled
    : theme.palette.text.secondary,
  borderRadius: isActive ? ACTIVE_BORDER_RADIUS : 0,
  backgroundColor: isActive ? theme.palette.action.selected : "transparent",
  cursor: isFuture ? "not-allowed" : "pointer",
  opacity: isFuture ? FUTURE_OPACITY : 1,
  "&:hover": {
    ...(!isFuture &&
      !isActive && {
        backgroundColor: theme.palette.action.hover,
      }),
  },
  ...(isToday &&
    !isActive && {
      "&::after": {
        content: '""',
        position: "absolute" as const,
        bottom: theme.spacing(0.5),
        left: "50%",
        transform: "translateX(-50%)",
        width: TODAY_INDICATOR_SIZE,
        height: TODAY_INDICATOR_SIZE,
        borderRadius: "50%",
        backgroundColor: theme.palette.primary.main,
      },
    }),
}));
