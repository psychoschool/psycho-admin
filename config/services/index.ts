interface ServiceConfig {
  host: string
  pathPrefix?: string
}

export const JSON_API: Readonly<'json-api'> = 'json-api'

const prod: Record<string, ServiceConfig> = {
  [JSON_API]: {
    host: 'https://jsonplaceholder.typicode.com',
    pathPrefix: ''
  }
}

const stage: Record<string, ServiceConfig> = {
  [JSON_API]: {
    host: 'https://jsonplaceholder.typicode.com',
    pathPrefix: ''
  }
}

export const services = process.env.API_MODE === 'prod' ? prod : stage
