import type { CalorieOverviewProps } from "./types";
import type { MacroData } from "../../../../types";
import {
  Container,
  ChartSection,
  ChartContent,
  CalorieNumber,
  CalorieLabel,
  MacroSection,
  MacroItem,
  MacroHeader,
  MacroLabel,
  MacroValue,
  MacroProgressContainer,
  StyledLinearProgress,
  CircularProgressContainer,
  BackgroundCircularProgress,
  ProgressCircularProgress,
} from "./styles";

function calculateProgress(current: number, target: number): number {
  return Math.min((current / target) * 100, 100);
}

export const CalorieOverview = ({
  remainingCalories,
  macros,
}: CalorieOverviewProps) => {
  const totalProgress =
    macros.reduce(
      (acc, macro) => acc + calculateProgress(macro.current, macro.target),
      0
    ) / macros.length;

  return (
    <Container>
      <ChartSection>
        <CircularProgressContainer>
          <BackgroundCircularProgress
            variant="determinate"
            value={100}
            size={180}
            thickness={3}
          />
          <ProgressCircularProgress
            variant="determinate"
            value={totalProgress}
            size={180}
            thickness={3}
          />
        </CircularProgressContainer>

        <ChartContent>
          <CalorieNumber>{remainingCalories}</CalorieNumber>
          <CalorieLabel>Калорий осталось</CalorieLabel>
        </ChartContent>
      </ChartSection>

      <MacroSection>
        {macros.map((macro: MacroData) => (
          <MacroItem key={macro.label}>
            <MacroHeader>
              <MacroLabel>{macro.label}</MacroLabel>
              <MacroValue>
                {macro.current}/{macro.target}г
              </MacroValue>
            </MacroHeader>
            <MacroProgressContainer>
              <StyledLinearProgress
                variant="determinate"
                value={calculateProgress(macro.current, macro.target)}
                macroColor={macro.color}
              />
            </MacroProgressContainer>
          </MacroItem>
        ))}
      </MacroSection>
    </Container>
  );
};
