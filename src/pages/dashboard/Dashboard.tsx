import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import { TelegramUserInfo } from '../../components/telegram';
import { Dates } from './components/dates';
import { Overview } from './components/overview';
import { Meal } from './components/meal';
import { Add } from './components/add';
import { Container, Header, HeaderActions, CalendarSection, WeekDays, DateRow, MainSection, HistorySection } from './styles';
import { ROUTER } from '../../constants/router';
import type { MacroData } from '../../types';

const REMAINING_CALORIES = 1564;

const WEEK_DAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const HISTORY_MEALS = [
  {
    title: "Варёные яйца",
    calories: 312,
    time: "09:05",
    subtitle: "Б 24г    Ж 20г    У 1.6г",
  },
  {
    title: "Овсянка",
    calories: 240,
    time: "08:10",
    subtitle: "Б 8г    Ж 6г    У 42г",
  },
  {
    title: "Куриная грудка",
    calories: 220,
    time: "12:45",
    subtitle: "Б 35г    Ж 5г    У 0г",
  },
  {
    title: "Салат овощной",
    calories: 95,
    time: "13:30",
    subtitle: "Б 3г    Ж 4г    У 12г",
  },
  {
    title: "Йогурт",
    calories: 130,
    time: "15:10",
    subtitle: "Б 9г    Ж 3г    У 18г",
  },
  {
    title: "Орехи",
    calories: 180,
    time: "16:05",
    subtitle: "Б 6г    Ж 15г    У 5г",
  },
  {
    title: "Яблоко",
    calories: 85,
    time: "17:25",
    subtitle: "Б 0г    Ж 0г    У 22г",
  },
  {
    title: "Рис с овощами",
    calories: 310,
    time: "18:40",
    subtitle: "Б 7г    Ж 6г    У 58г",
  },
  {
    title: "Творог",
    calories: 150,
    time: "21:00",
    subtitle: "Б 20г    Ж 5г    У 4г",
  },
  {
    title: "Банан",
    calories: 100,
    time: "21:45",
    subtitle: "Б 1г    Ж 0г    У 26г",
  },
  {
    title: "Шоколад 2 кусочка",
    calories: 110,
    time: "22:15",
    subtitle: "Б 2г    Ж 6г    У 12г",
  },
];

export const Dashboard = () => {
  const navigate = useNavigate();
  const theme = useTheme();

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
      <TelegramUserInfo />
      <Header>
        <Typography variant="h3" component="h1">
          FoodGPT
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
          <Dates />
        </DateRow>
      </CalendarSection>

      <MainSection>
        <Overview
          remainingCalories={REMAINING_CALORIES}
          macros={macros}
        />
      </MainSection>

      <HistorySection>
        <Typography variant="h4" component="h2">
          История
        </Typography>
        {HISTORY_MEALS.map((m, idx) => (
          <Meal
            key={`${m.title}-${idx}`}
            title={m.title}
            calories={m.calories}
            time={m.time}
            subtitle={m.subtitle}
          />
        ))}
      </HistorySection>

      <Add />
    </Container>
  );
};
