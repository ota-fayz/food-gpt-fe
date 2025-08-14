import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Stack from '@mui/material/Stack'

import { ProfileCard } from './components/profile-card'
import { SettingsCard } from './components/settings-card'
import { PlanSheet } from './components/plan-sheet'
import { MOCK_USER_PROFILE, MOCK_NUTRITION_PLAN, MOCK_PERSONALIZATION_SETTINGS, PROFILE_ICONS } from './data'
import type { NutritionPlan, PersonalizationSetting } from '../../types'
import { 
  Container, 
  Header, 
  HeaderActions, 
  Title, 
  Content, 
  Section, 
  SectionTitle, 
  CardGrid,
} from './styles'

const Profile = () => {
  const navigate = useNavigate()
  const [isPlanSheetOpen, setIsPlanSheetOpen] = useState(false)
  const [nutritionPlan, setNutritionPlan] = useState<NutritionPlan>(MOCK_NUTRITION_PLAN)
  const [settings, setSettings] = useState<PersonalizationSetting[]>(MOCK_PERSONALIZATION_SETTINGS)

  const handleBack = () => {
    navigate(-1)
  }

  const handlePlanClick = () => {
    setIsPlanSheetOpen(true)
  }

  const handlePlanSave = (plan: NutritionPlan) => {
    setNutritionPlan(plan)
    setIsPlanSheetOpen(false)
  }

  const handleSettingToggle = (settingId: string, enabled: boolean) => {
    setSettings(prev => prev.map(setting => 
      setting.id === settingId ? { ...setting, enabled } : setting
    ))
  }

  const handleEditProfile = (field: string) => {
    console.log(`Edit ${field}`)
    // TODO: Implement profile editing
  }

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
            <ProfileCard
              icon={PROFILE_ICONS.goal}
              label="Ваша цель"
              value={MOCK_USER_PROFILE.goal}
              onClick={() => handleEditProfile('goal')}
            />
            <ProfileCard
              icon={PROFILE_ICONS.age}
              label="Возраст"
              value={MOCK_USER_PROFILE.age}
              unit="лет"
              onClick={() => handleEditProfile('age')}
            />
            <ProfileCard
              icon={PROFILE_ICONS.weight}
              label="Вес"
              value={MOCK_USER_PROFILE.weight}
              unit="кг"
              onClick={() => handleEditProfile('weight')}
            />
            <ProfileCard
              icon={PROFILE_ICONS.height}
              label="Рост"
              value={MOCK_USER_PROFILE.height}
              unit="см"
              onClick={() => handleEditProfile('height')}
            />
            <ProfileCard
              icon={PROFILE_ICONS.activity}
              label="Активность"
              value={MOCK_USER_PROFILE.activity}
              onClick={() => handleEditProfile('activity')}
            />
          </CardGrid>
        </Section>

        <Section>
          <SectionTitle>Персонализация</SectionTitle>
          <Stack spacing={1}>
            {settings.map((setting) => (
              <SettingsCard
                key={setting.id}
                icon={setting.icon}
                title={setting.title}
                description={setting.description}
                enabled={setting.enabled}
                showToggle={setting.id !== 'plan'}
                onClick={setting.id === 'plan' ? handlePlanClick : undefined}
                onToggle={setting.id !== 'plan' ? (enabled) => handleSettingToggle(setting.id, enabled) : undefined}
              />
            ))}
          </Stack>
        </Section>
      </Content>

      <PlanSheet
        open={isPlanSheetOpen}
        onClose={() => setIsPlanSheetOpen(false)}
        plan={nutritionPlan}
        onSave={handlePlanSave}
      />
    </Container>
  )
}

export default Profile
