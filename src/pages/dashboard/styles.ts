import { styled } from '@mui/material/styles'

export const Container = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.common.white,
    overflow: 'hidden',
    padding: theme.spacing(4)
}))

export const Header = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
    backgroundColor: 'transparent'
}))

export const HeaderActions = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1)
}))

export const TimeDisplay = styled('div')(() => ({
    fontSize: '26.9px',
    fontWeight: 600,
    color: '#272727',
    lineHeight: 1.21
}))

export const HeaderIcons = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(1),
    alignItems: 'center'
}))

export const AppTitle = styled('div')(() => ({
    fontSize: '20px',
    fontWeight: 700,
    color: '#131313',
    lineHeight: 1.21
}))

export const CalendarSection = styled('div')(({ theme }) => ({
    padding: theme.spacing(1, 0),
    backgroundColor: 'transparent'
}))

export const WeekDays = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
    marginBottom: theme.spacing(1)
}))

export const DayLabel = styled('div')(() => ({
	fontSize: '21px',
	fontWeight: 500,
	color: '#3F3F3F',
	lineHeight: 1.21,
	textAlign: 'center',
	minWidth: '40px'
}))

export const DateRow = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(1, 0)
}))

export const DateItem = styled('div')<{ isActive?: boolean }>(({ isActive }) => ({
	fontSize: '20px',
	fontWeight: isActive ? 500 : 400,
	color: isActive ? '#C1C1C1' : '#343434',
	textAlign: 'center',
	minWidth: '40px',
	height: '40px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	borderRadius: isActive ? '26px' : '0',
	backgroundColor: isActive ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
	lineHeight: 1.21
}))

export const MainSection = styled('div')(({ theme }) => ({
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2)
}))

export const CalorieCard = styled('div')(({ theme }) => ({
	backgroundColor: '#FEFEFE',
	borderRadius: '12px',
	padding: theme.spacing(3),
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	position: 'relative',
	minHeight: '200px'
}))

export const CalorieNumber = styled('div')(({ theme }) => ({
	fontSize: '43.4px',
	fontWeight: 600,
	color: '#151515',
	lineHeight: 1.21,
	marginBottom: theme.spacing(1)
}))

export const CalorieLabel = styled('div')(({ theme }) => ({
	fontSize: '15.4px',
	color: '#565656',
	lineHeight: 1.21,
	marginBottom: theme.spacing(2)
}))

export const CalorieAddition = styled('div')(({ theme }) => ({
	fontSize: '18px',
	color: '#555555',
	lineHeight: 1.21,
	display: 'flex',
	alignItems: 'center',
	gap: theme.spacing(0.5)
}))

export const MacroSection = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
    gap: theme.spacing(2),
    padding: 0
}))

export const MacroItem = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(1)
}))

export const MacroHeader = styled('div')(() => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center'
}))

export const MacroLabel = styled('div')(() => ({
	fontSize: '19px',
	fontWeight: 500,
	color: '#3A3A3A',
	lineHeight: 1.21
}))

export const MacroValue = styled('div')(() => ({
	fontSize: '15.7px',
	color: '#5C5C5C',
	lineHeight: 1.21
}))

export const MacroProgressBar = styled('div')(() => ({
	width: '100%',
	height: '14px',
	backgroundColor: '#E8E8E8',
	borderRadius: '7px',
	overflow: 'hidden'
}))

export const MacroProgress = styled('div')<{ width: number; color: string }>(({ width, color }) => ({
	width: `${width}%`,
	height: '100%',
	backgroundColor: color,
	transition: 'width 0.3s ease'
}))

export const HistorySection = styled('div')(({ theme }) => ({
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    flex: 1,
    minHeight: 0,
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch',
    paddingBottom: theme.spacing(10)
}))

export const HistoryTitle = styled('div')(({ theme }) => ({
	fontSize: '26.2px',
	fontWeight: 500,
	color: '#262626',
	lineHeight: 1.21,
	paddingLeft: theme.spacing(1)
}))

export const ActivityCard = styled('div')(({ theme }) => ({
	backgroundColor: '#FEFEFE',
	borderRadius: '22px',
	border: '1px solid #E8E8E8',
	padding: theme.spacing(2),
	display: 'flex',
	alignItems: 'center',
	gap: theme.spacing(2)
}))

export const ActivityIcon = styled('div')(() => ({
	width: '110px',
	height: '109px',
	borderRadius: '8px',
	backgroundColor: '#F0F0F0',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexShrink: 0
}))

export const ActivityContent = styled('div')(({ theme }) => ({
	flex: 1,
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(0.5)
}))

export const ActivityName = styled('div')(() => ({
	fontSize: '18.4px',
	color: '#4E4E4E',
	lineHeight: 1.21
}))

export const ActivityCalories = styled('div')(() => ({
	fontSize: '24.2px',
	fontWeight: 500,
	color: '#222222',
	lineHeight: 1.21
}))

export const ActivityDuration = styled('div')(() => ({
	fontSize: '18.5px',
	color: '#484848',
	lineHeight: 1.21
}))

export const ActivityTime = styled('div')(() => ({
	fontSize: '16.2px',
	color: '#B0B0B0',
	lineHeight: 1.21,
	alignSelf: 'flex-start'
}))
