import { useState } from "react";

import ScrollableDates from "./components/ScrollableDates";
import CalorieOverview from "./components/CalorieOverview";
import HistoryMealCard from "./components/HistoryMealCard";
import { AddButtonIcon } from "./components/AddButton";
import AddSheet from "./components/AddSheet";
  import IconButton from "@mui/material/IconButton";
  import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

  import {
    Container,
    Header,
    AppTitle,
    CalendarSection,
    WeekDays,
    DayLabel,
    DateRow,
    MainSection,
    HistorySection,
    HistoryTitle,
    HeaderActions,
  } from "./styles";

interface MacroData {
  label: string;
  current: number;
  target: number;
  color: string;
}

const Dashboard = () => {
  const [isAddOpen, setIsAddOpen] = useState(false);

  // Mock data - later this will come from state management
  const remainingCalories = 1564;
  const calorieAddition = 61;

  const macros: MacroData[] = [
    { label: "Белки", current: 24, target: 140, color: "#F28B82" },
    { label: "Жиры", current: 20, target: 55, color: "#FBBC04" },
    { label: "Углеводы", current: 1.6, target: 190, color: "#4285F4" },
  ];

  // activities will come later from state; not used in this iteration

  const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "сб", "Вс"];
  const dates = [16, 17, 18, 19, 20, 21, 22];
  const [currentDateNum, setCurrentDateNum] = useState(17);

  const historyMeals = [
    { title: "Другое", calories: 61, time: "20:33", subtitle: "20 мин" },
    { title: "Варёные яйца", calories: 312, time: "09:05", subtitle: "P 24г    F 20г    C 1.6г" },
    { title: "Овсянка", calories: 240, time: "08:10", subtitle: "P 8г    F 6г    C 42г" },
    { title: "Куриная грудка", calories: 220, time: "12:45", subtitle: "P 35г    F 5г    C 0г" },
    { title: "Салат овощной", calories: 95, time: "13:30", subtitle: "P 3г    F 4г    C 12г" },
    { title: "Йогурт", calories: 130, time: "15:10", subtitle: "P 9г    F 3г    C 18г" },
    { title: "Орехи", calories: 180, time: "16:05", subtitle: "P 6г    F 15г    C 5г" },
    { title: "Яблоко", calories: 85, time: "17:25", subtitle: "P 0г    F 0г    C 22г" },
    { title: "Рис с овощами", calories: 310, time: "18:40", subtitle: "P 7г    F 6г    C 58г" },
    { title: "Творог", calories: 150, time: "21:00", subtitle: "P 20г    F 5г    C 4г" },
    { title: "Банан", calories: 100, time: "21:45", subtitle: "P 1г    F 0г    C 26г" },
    { title: "Шоколад 2 кусочка", calories: 110, time: "22:15", subtitle: "P 2г    F 6г    C 12г" },
  ];

  // No status bar time display per design

  // kept in component for future need

  return (
    <Container>
      <Header>
        <AppTitle>CalZen</AppTitle>
        <HeaderActions>
          <IconButton aria-label="profile" color="inherit">
            <AccountCircleOutlinedIcon />
          </IconButton>
        </HeaderActions>
      </Header>

      <CalendarSection>
        <WeekDays>
          {weekDays.map((day) => (
            <DayLabel key={day}>{day}</DayLabel>
          ))}
        </WeekDays>
        <DateRow>
          <ScrollableDates
            dates={dates}
            activeDate={currentDateNum}
            onChange={setCurrentDateNum}
          />
        </DateRow>
      </CalendarSection>

      <MainSection>
        <CalorieOverview
          remainingCalories={remainingCalories}
          addition={calorieAddition}
          macros={macros}
        />
      </MainSection>

      <HistorySection>
        <HistoryTitle>История</HistoryTitle>
        {historyMeals.map((m, idx) => (
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
