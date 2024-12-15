import { Eta } from 'eta';
import { __views } from 'library/variables.ts';
const eta = new Eta({ views: __views })

function render(template: string, data: any) {
  return eta.render(template, data)
}

export default render