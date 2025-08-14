import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import { ScrollableDates } from "./components/scrollable-dates";
import { CalorieOverview } from "./components/calorie-overview";
import { HistoryMealCard } from "./components/history-meal-card";
import { AddButtonIcon } from "./components/add-button";
import { AddSheet } from "./components/add-sheet";
import IconButton from "@mui/material/IconButton";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ROUTER } from "../../constants/router";
import type { MacroData } from "../../types";
import {
  Container,
  Header,
  CalendarSection,
  WeekDays,
  DateRow,
  MainSection,
  HistorySection,
  HeaderActions,
} from "./styles";

// CONSTANTS
const REMAINING_CALORIES = 1564;
const CALORIE_ADDITION = 61;

const WEEK_DAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "сб", "Вс"];

const HISTORY_MEALS = [
  { title: "Другое", calories: 61, time: "20:33", subtitle: "20 мин" },
  {
    title: "Варёные яйца",
    calories: 312,
    time: "09:05",
    subtitle: "P 24г    F 20г    C 1.6г",
  },
  {
    title: "Овсянка",
    calories: 240,
    time: "08:10",
    subtitle: "P 8г    F 6г    C 42г",
  },
  {
    title: "Куриная грудка",
    calories: 220,
    time: "12:45",
    subtitle: "P 35г    F 5г    C 0г",
  },
  {
    title: "Салат овощной",
    calories: 95,
    time: "13:30",
    subtitle: "P 3г    F 4г    C 12г",
  },
  {
    title: "Йогурт",
    calories: 130,
    time: "15:10",
    subtitle: "P 9г    F 3г    C 18г",
  },
  {
    title: "Орехи",
    calories: 180,
    time: "16:05",
    subtitle: "P 6г    F 15г    C 5г",
  },
  {
    title: "Яблоко",
    calories: 85,
    time: "17:25",
    subtitle: "P 0г    F 0г    C 22г",
  },
  {
    title: "Рис с овощами",
    calories: 310,
    time: "18:40",
    subtitle: "P 7г    F 6г    C 58г",
  },
  {
    title: "Творог",
    calories: 150,
    time: "21:00",
    subtitle: "P 20г    F 5г    C 4г",
  },
  {
    title: "Банан",
    calories: 100,
    time: "21:45",
    subtitle: "P 1г    F 0г    C 26г",
  },
  {
    title: "Шоколад 2 кусочка",
    calories: 110,
    time: "22:15",
    subtitle: "P 2г    F 6г    C 12г",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(() => new Date());

  const macros: MacroData[] = [
    {
      label: "Белки",
      current: 24,
      target: 140,
      color: theme.palette.error.light,
    },
    {
      label: "Жиры",
      current: 20,
      target: 55,
      color: theme.palette.warning.main,
    },
    {
      label: "Углеводы",
      current: 1.6,
      target: 190,
      color: theme.palette.info.main,
    },
  ];

  return (
    <Container>
      <Header>
        <Typography variant="h3" component="h1">
          CalZen
        </Typography>
        <HeaderActions>
          <IconButton
            aria-label="profile"
            color="inherit"
            onClick={() => navigate(ROUTER.PROFILE)}
          >
            <AccountCircleOutlinedIcon />
          </IconButton>
        </HeaderActions>
      </Header>

      <CalendarSection>
        <WeekDays>
          {WEEK_DAYS.map((day) => (
            <Box
              key={day}
              minWidth="40px"
              flex="1 0 auto"
              display="flex"
              justifyContent="center"
            >
              <Typography variant="h6" component="div" color="text.secondary">
                {day}
              </Typography>
            </Box>
          ))}
        </WeekDays>
        <DateRow>
          <ScrollableDates
            activeDate={currentDate}
            onChange={setCurrentDate}
          />
        </DateRow>
      </CalendarSection>

      <MainSection>
        <CalorieOverview
          remainingCalories={REMAINING_CALORIES}
          addition={CALORIE_ADDITION}
          macros={macros}
        />
      </MainSection>

      <HistorySection>
        <Typography variant="h4" component="h2" gutterBottom>
          История
        </Typography>
        {HISTORY_MEALS.map((m, idx) => (
          <HistoryMealCard
            key={`${m.title}-${idx}`}
            title={m.title}
            calories={m.calories}
            time={m.time}
            subtitle={m.subtitle}
          />
        ))}
      </HistorySection>

      <AddButtonIcon onClick={() => setIsAddOpen(true)} />
      <AddSheet open={isAddOpen} onClose={() => setIsAddOpen(false)} />
    </Container>
  );
};

export default Dashboard;
