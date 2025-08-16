import Stack from "@mui/material/Stack";

import type { MealProps } from "./types";
import {
  StyledCard,
  IconContainer,
  ContentContainer,
  Title,
  Calories,
  Subtitle,
  Time,
  FoodPlaceholder,
} from "./styles";

const FOOD_EMOJIS = ["🍽️", "🥗", "🍎", "🥑", "🍇", "🥕", "🍊", "🥞", "🍳", "🥯"];

const getRandomFoodEmoji = () => {
  return FOOD_EMOJIS[Math.floor(Math.random() * FOOD_EMOJIS.length)];
};

export const Meal = ({
  iconUrl,
  title,
  calories,
  time,
  subtitle,
}: MealProps) => {
  return (
    <StyledCard>
      <IconContainer
        style={iconUrl ? { backgroundImage: `url(${iconUrl})` } : {}}
      >
        {!iconUrl && (
          <FoodPlaceholder>
            {getRandomFoodEmoji()}
          </FoodPlaceholder>
        )}
      </IconContainer>

      <ContentContainer>
        <Stack spacing={0.75}>
          <Title>{title}</Title>
          <Calories>{calories} ккал</Calories>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Stack>
      </ContentContainer>

      <Time>{time}</Time>
    </StyledCard>
  );
};
