import * as React from 'react'
import styles from './styles.module.css'

export interface VigneshProps {
  text: string
}
export const treedata = {
  tree: 123
}
const VigneshComponent = ({ text }: VigneshProps) => {
  return <div className={styles.test}>{text}</div>
}

export default VigneshComponent
