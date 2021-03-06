import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import { withTests } from '@storybook/addon-jest'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import results from '../.jest-test-results.json'
import { rg6, dark } from './themes'

addDecorator(withKnobs)
addDecorator(withA11y)
addDecorator(withThemesProvider([rg6, dark]))
addDecorator(withTests({ results }))
// automatically import all files ending in *.stories.jsx
configure(require.context('../src', true, /\.stories\.jsx$/), module)
