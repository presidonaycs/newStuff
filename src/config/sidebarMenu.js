/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { RiBarChartFill, RiUserSettingsLine } from 'react-icons/ri';
import { BiEnvelope } from 'react-icons/bi';
import { HiOutlineUserAdd } from 'react-icons/hi';
import { CgUserList } from 'react-icons/cg';

export default [
  { title: 'Dashboard', href: '/admin-portal', icon: <RiBarChartFill className="icon" /> },
  { title: 'MDA Setup', href: '/admin-portal/mda-setup', icon: <BiEnvelope className="icon" /> },
  { title: 'Role Setup', href: '/admin-portal/roles-setup', icon: <RiUserSettingsLine className="icon" /> },
  {
    title: 'Staff Onboarding',
    href: '',
    icon: <HiOutlineUserAdd className="icon" />,
    children: [
      { title: 'Create Profile', href: '/admin-portal/employee-profile', icon: 'CP' },
      { title: 'Employee Details', href: '/admin-portal/employee-details', icon: 'ED' }
    ]
  },
  { title: 'Supervisor Organogram', href: '/admin-portal/supervisor-organogram', icon: <CgUserList className="icon" /> }
];
