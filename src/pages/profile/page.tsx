import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Card } from "./components/card";
import { Personalization } from "./components/personalization";
import { Edit } from "./components/edit";
import { MOCK_USER_PROFILE, MOCK_NUTRITION_PLAN, PROFILE_ICONS } from "./data";
import type { NutritionPlan } from "../../types";
import {
  Container,
  Header,
  HeaderActions,
  Title,
  Content,
  Section,
  CardGrid,
} from "./styles";

const Profile = () => {
  const navigate = useNavigate();

  const [nutritionPlan, setNutritionPlan] =
    useState<NutritionPlan>(MOCK_NUTRITION_PLAN);
  const [userProfile, setUserProfile] = useState(MOCK_USER_PROFILE);
  const [editModal, setEditModal] = useState<{
    open: boolean;
    field: "goal" | "age" | "weight" | "height" | "activity";
    currentValue: string | number;
  }>({
    open: false,
    field: "goal",
    currentValue: "",
  });

  const handleBack = () => {
    navigate(-1);
  };

  const handlePlanSave = (plan: NutritionPlan) => {
    setNutritionPlan(plan);
  };

  const handleEditProfile = (
    field: "goal" | "age" | "weight" | "height" | "activity"
  ) => {
    setEditModal({
      open: true,
      field,
      currentValue: userProfile[field],
    });
  };

  const handleProfileSave = (value: string | number) => {
    setUserProfile((prev) => ({
      ...prev,
      [editModal.field]: value,
    }));
  };

  const handleEditModalClose = () => {
    setEditModal((prev) => ({
      ...prev,
      open: false,
    }));
  };

  return (
    <Container>
      <Header>
        <HeaderActions>
          <IconButton onClick={handleBack} size="large">
            <ArrowBackIcon />
          </IconButton>
        </HeaderActions>
        <Title>Профиль</Title>
      </Header>

      <Content>
        <Section>
          <CardGrid>
            <Card
              icon={PROFILE_ICONS.goal}
              label="Ваша цель"
              value={userProfile.goal}
              onClick={() => handleEditProfile("goal")}
            />
            <Card
              icon={PROFILE_ICONS.age}
              label="Возраст"
              value={userProfile.age}
              unit="лет"
              onClick={() => handleEditProfile("age")}
            />
            <Card
              icon={PROFILE_ICONS.weight}
              label="Вес"
              value={userProfile.weight}
              unit="кг"
              onClick={() => handleEditProfile("weight")}
            />
            <Card
              icon={PROFILE_ICONS.height}
              label="Рост"
              value={userProfile.height}
              unit="см"
              onClick={() => handleEditProfile("height")}
            />
            <Card
              icon={PROFILE_ICONS.activity}
              label="Активность"
              value={userProfile.activity}
              onClick={() => handleEditProfile("activity")}
            />
          </CardGrid>

          <Personalization plan={nutritionPlan} onPlanSave={handlePlanSave} />
        </Section>
      </Content>

      <Edit
        open={editModal.open}
        onClose={handleEditModalClose}
        field={editModal.field}
        currentValue={editModal.currentValue}
        onSave={handleProfileSave}
      />
    </Container>
  );
};

export default Profile;
