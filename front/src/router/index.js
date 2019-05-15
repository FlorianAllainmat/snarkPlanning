import Vue from 'vue'
import Router from 'vue-router'

import Acceuil from '@/pages/Acceuil'

import LoginManager from '@/pages/LoginManager'
import LoginCollaborater from '@/pages/LoginCollaborater'

import manager from '@/pages/manager/manager'
import collaborater from '@/pages/manager/collaborater'
import Project from '@/pages/manager/project'
import Planning from '@/pages/manager/planning'
import Statistic from '@/pages/manager/statistic'

import Collaborater from '@/pages/collaborater/collaborater'
import PlanningCollaborateur from '@/pages/collaborater/planning'
import ValidationPlanning from '@/pages/collaborater/validationPlanning'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Acceuil',
      component: Acceuil,
    },
    {
      path: '/login-manager',
      name: 'LoginManager',
      component: LoginManager
    },
    {
      path: '/login-collaborater',
      name: 'LoginCollaborater',
      component: LoginCollaborater
    },
    {
      path: '/manager',
      name: 'manager',
      component: manager,
      children:
      [
        {
          path: 'collaborater',
          name: 'collaborater',
          component: collaborater,
        },
        {
          path: 'project',
          name: 'project',
          component: Project
        },
        {
          path: 'planning',
          name: 'planning',
          component: Planning,
        },
        {
          path: 'statistic',
          name: 'statistic',
          component: Statistic,
        }
      ]
    },
    {
      path: '/collaborater',
      name: 'collaborater',
      component: Collaborater,
      children:
      [
        {
          path: 'planning',
          name: 'planning',
          component: PlanningCollaborateur,
        },
        {
          path: 'validation-planning',
          name: 'validationPlanning',
          component: ValidationPlanning,
        }
      ]
    },
  ]
})
