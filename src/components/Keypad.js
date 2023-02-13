import '../styles/Keypad.css';

export default function Keypad({usedKeys, letters}) {
  return (
    <div className='keypad'>
      {letters && letters.map((l,i) => {
        const color = usedKeys[l.key]
        return (
          <div className={color} key={l.key}>
            {l.key}
          </div>
        )
      })}
    </div>
  )
}
