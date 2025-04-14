import { Menu } from 'antd'
import { 
  AppstoreAddOutlined,
  AreaChartOutlined,
  BarsOutlined,
  HomeOutlined,
  PayCircleOutlined,
  SettingOutlined,
  UserOutlined,
  LinkOutlined,
} from '@ant-design/icons'

const items = [
  {
    key: 'home',
    icon: <HomeOutlined />,
    label: 'Home',
  },
  {
    key: 'activity',
    icon: <AppstoreAddOutlined />,
    label: 'Activity',
  },
  {
    key: 'tasks',
    label: 'Tasks',
    icon: <BarsOutlined />,
    children: [
      { key: 'task-1', label: 'task 1' },
      { key: 'task-2', label: 'task 2' },
      {
        key: 'subtasks',
        label: 'Subtasks',
        children: [
          { key: 'subtask-1', label: 'subtask 1' },
          { key: 'subtask-2', label: 'subtask 2' },
        ],
      },
    ],
  },
  {
    key: 'profile',
    label: 'Profile',
    icon: <UserOutlined />,
    children: [
      { key: '7', label: 'Option 7' },
      { key: '8', label: 'Option 8' },
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
    ],
  },
  {
    key: 'progress',
    label: 'progress',
    icon: <AreaChartOutlined />,
  },
  {
    key: 'payment',
    label: 'payment',
    icon: <PayCircleOutlined />,
  },
  {
    key: 'settings',
    label: 'settings',
    icon: <SettingOutlined />,
  },
  {
    key: 'link',
    icon: <LinkOutlined />,
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Ant Design
      </a>
    ),
  },
];

function MenuList({theme}) {
  return (
    <Menu className="sidebar" theme={theme} mode='inline' defaultSelectedKeys={['home']} items={items}></Menu>
  )
}
export default MenuList