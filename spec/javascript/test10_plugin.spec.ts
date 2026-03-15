import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'

describe('test10 plugin JavaScript files', () => {
  const pluginRoot = 'storage/plugins/test10'

  it('celebration controller is valid JavaScript', () => {
    const controllerPath = path.join(pluginRoot, 'app/javascript/controllers/celebration_controller.js')
    const content = fs.readFileSync(controllerPath, 'utf-8')
    
    expect(content).toContain('export default class')
    expect(content).toContain('createRoot')
    expect(content).toContain('CelebrationBalloons')
    expect(content).toContain('static values')
  })

  it('celebration balloons component is valid TypeScript', () => {
    const componentPath = path.join(pluginRoot, 'app/javascript/components/celebration/celebration_balloons.tsx')
    const content = fs.readFileSync(componentPath, 'utf-8')
    
    expect(content).toContain('export function CelebrationBalloons')
    expect(content).toContain('createElement')
    expect(content).toContain('Deal Won')
  })
})