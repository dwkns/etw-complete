import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  project: {
    basePath: '/sanity'
  },
  api: {
    projectId: 'tfo5uqav',
    dataset: 'production'
  }
})
