import { palette, paletteDark, paletteLight } from '@cookies-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries({ ...paletteDark, ...paletteLight, ...palette }).map(
    ([key, color]) => {
      console.log(color)
      return (
        <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'monospace',
              color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF',
            }}
          >
            <strong>${key}</strong>
            <span>{color}</span>
          </div>
        </div>
      )
    },
  )
}
