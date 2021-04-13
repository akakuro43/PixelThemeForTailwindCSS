import React from 'react'

type Props = {
  className?: string
 }

const AppLayout: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
  </div>
  ) 
}

export default AppLayout