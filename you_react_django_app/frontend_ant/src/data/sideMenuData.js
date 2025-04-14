import React from 'react';
import { AppstoreAddOutlined, AreaChartOutlined, BarsOutlined, HomeOutlined, PayCircleOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
export const items = [
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
    children: [
      { key: '7', label: 'Option 7' },
      { key: '8', label: 'Option 8' },
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
    ],
  },
  {
    key: 'payment',
    label: 'payment',
    icon: <PayCircleOutlined />,
    children: [
      { key: '7', label: 'Option 7' },
      { key: '8', label: 'Option 8' },
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
    ],
  },
  {
    key: 'settings',
    label: 'settings',
    icon: <SettingOutlined />,
    children: [
      { key: '7', label: 'Option 7' },
      { key: '8', label: 'Option 8' },
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
    ],
  },
//   {
//     key: 'link',
//     icon: <LinkOutlined />,
//     label: (
//       <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
//         Ant Design
//       </a>
//     ),
//   },
];